import React, { useState, useEffect } from 'react';
import {
  View, Text,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import uuid from 'react-native-uuid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';
import AddForm from '../../components/AddForm';
import ListsOfContacts from '../../components/ListsOfContacts';
import styles from './styles';

import * as fileService from '../../services/fileService';
import * as imageService from '../../services/imageService';

function ContactsPage() {
  const [contactsDataFinal, setContacts] = useState();
  const [contactsLoaded, setContactsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [addFormOpen, setAddFormOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const contactsFromJson = await fileService.getAllContacts();
      const allData = [...contactsFromJson];
      setContacts(allData.sort((a, b) => a.name.localeCompare(b.name)));
      setFilteredDataSource(allData.sort((a, b) => a.name.localeCompare(b.name)));
      setContactsLoaded(true);
    })();
  }, []);

  const addContactFromOS = async (contact) => {
    const newContact = {
      id: contact.id,
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      image: contact.image,
    };
    await fileService.addContact(contact.id, newContact);
  };

  const loadContactFromOs = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        contacts_data: [Contacts.Fields],
      });

      if (data.length > 0) {
        const sommin = data.map((contact) => ({
          id: `${contact.name}-${uuid.v4()}.json`,
          name: contact.name,
          phoneNumber: contact.phoneNumbers[0].number,
          image: contact.image?.uri,
        }));
        await Promise.all(sommin.map((contact) => addContactFromOS(contact)));
        const allData = [...contactsDataFinal, ...sommin];
        setContacts(allData.sort((a, b) => a.name.localeCompare(b.name)));
        setContactsLoaded(true);
        setFilteredDataSource(allData.sort((a, b) => a.name.localeCompare(b.name)));
      }
    }
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = contactsDataFinal.filter((item) => {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(contactsDataFinal);
      setSearch(text);
    }
  };

  const takePhoto = async () => {
    const photo = await imageService.takePhoto();
    if (photo.length > 0) {
      return (photo);
    }
  };

  const selectFromCameraRoll = async () => {
    const photo = await imageService.selectFromCameraRoll();
    if (photo.length > 0) {
      return (photo);
    }
  };

  const addContact = async (contact) => {
    const filename = `${contact.phoneName}-${uuid.v4()}.json`;
    const newContact = {
      id: filename,
      name: contact.phoneName,
      phoneNumber: contact.personNumber,
      image: contact.contactPhoto,
    };
    const finalDataWithNewContact = [...contactsDataFinal, newContact];
    setContacts(finalDataWithNewContact.sort((a, b) => a.name.localeCompare(b.name)));
    await fileService.addContact(filename, newContact);
    searchFilterFunction();
    setFilteredDataSource(finalDataWithNewContact.sort((a, b) => a.name.localeCompare(b.name)));
    setAddFormOpen(false);
  };

  return (
    <View style={styles.container}>
      {!addFormOpen
        ?
        (
        <SearchBar
          round
          containerStyle={styles.searchbar}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={() => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        )
        : (
          <View>
          </View>
        )
      }

      <ListsOfContacts
        contactsLoaded={contactsLoaded}
        contacts={filteredDataSource}
      />
      <AddForm
        takePhoto={() => takePhoto()}
        selectFromCameraRoll={() => selectFromCameraRoll()}
        addContact={(data) => addContact(data)}
        isOpen={addFormOpen}
        addFormCloseOpenFunction={() => setAddFormOpen(false)}
      />

      {!addFormOpen
        ?
        (
        <View style={styles.iconscontainer}>
          <TouchableOpacity onPress={() => setAddFormOpen(true)}>
            <Text style={[styles.button, styles.buttonText]}>Add New Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => loadContactFromOs()}>
            <Text style={[styles.button, styles.buttonText]}>Import Contacts</Text>
          </TouchableOpacity>
        </View>
      )
      : (
        <View>
        </View>
      )
    }
    </View>
  );
}

export default ContactsPage;
