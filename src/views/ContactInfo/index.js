import React, { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  View, Text, Image, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import call from 'react-native-phone-call';
import styles from './styles';

import * as fileService from '../../services/fileService';
import * as imageService from '../../services/imageService';

function ContactInfo({ route }) {
  const {
    contactId, contactName, contactPhone, contactImage,
  } = route.params;
  const [editOpen, setEditOpen] = useState(false);
  const [inUseContactName, setInUseContactName] = useState();
  const [inUseContactPhone, setInUseContactPhone] = useState();
  const [inUseContactImage, setInUseContactImage] = useState();
  const [inputs, setInputs] = useState({
    name: '',
    phoneNumber: '',
    image: '',
  });

  useEffect(() => {
    (async () => {
      setInUseContactName(contactName);
      setInUseContactPhone(contactPhone);
      setInUseContactImage(contactImage);
    })();
  }, []);

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const args = {
    number: inUseContactPhone, // String value with the number to call
    prompt: true, // Optional boolean property. Determines if the user should be prompt prior to the call
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

  const overWriteData = async (contactId, name, phoneNumber, image) => {
    // 1. Find file by id.
    const oldData = await fileService.getSingleContact(contactId);
    const singledOutOldData = oldData.filter((contact) => contact?.id === contactId);
    // 2a. Check if passed in fields are empty
    // 2b. if empty replace with old data
    if (name !== '') {
      singledOutOldData[0].name = name;
      setInUseContactName(name);
    }
    if (phoneNumber !== '') {
      singledOutOldData[0].phoneNumber = phoneNumber;
      setInUseContactPhone(phoneNumber);
    }
    if (image !== '') {
      singledOutOldData[0].image = image;
      setInUseContactImage(image);
    }

    if (name !== '' || phoneNumber !== '' || image !== '') {
      // 3. delete old file
      await fileService.deleteSingleContact(contactId);
      // 4. create the file again...
      await fileService.addContact(contactId, singledOutOldData[0]);
    }
  };

  if (editOpen) {
    return (
      <View style={styles.container}>
        <Text>Change name Of Contact</Text>
        <TextInput
          placeholder="Enter new contact name..."
          value={inputs.name}
          onChangeText={(text) => inputHandler('name', text)}
        />
        <Text>Change Phone Number</Text>
        <TextInput
          placeholder="Enter new phone number..."
          value={inputs.phoneNumber}
          keyboardType="numeric"
          onChangeText={(text) => inputHandler('phoneNumber', text)}
        />
        <Text>Choose a photo</Text>
        <View style={styles.iconscontainer}>
          <TouchableOpacity
            onPress={async () => inputHandler('image', (await takePhoto()))}
          >
            <Entypo style={styles.icon} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => inputHandler('image', (await selectFromCameraRoll()))}
          >
            <Entypo style={styles.icon} name="image" />
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            overWriteData(contactId, inputs.name, inputs.phoneNumber, inputs.image);
            inputHandler('name', '');
            inputHandler('phoneNumber', '');
            inputHandler('image', '');
            setEditOpen(false);
          }}
        >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Name: {inUseContactName}</Text>
      {inUseContactImage
        ? (
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: inUseContactImage }}
          />
        )
        : (
          <View>
            <Text>No Image</Text>
          </View>
        )}
      <TouchableOpacity onPress={() => call(args).catch(console.error)}>
        <Text style={[styles.button, styles.buttonText]}>
          call: 
          {inUseContactPhone}
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        onPress={() => setEditOpen(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Edit contact</Text>
      </TouchableHighlight>
    </View>
  );
}

export default ContactInfo;

ContactInfo.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      contactId: PropTypes.string.isRequired,
      contactName: PropTypes.string.isRequired,
      contactPhone: PropTypes.string.isRequired,
      contactImage: PropTypes.string,
    }),
  }),
};
