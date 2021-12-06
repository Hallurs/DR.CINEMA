import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import SingleContactComponent from '../SingleContactComponent';

function ListsOfContacts({ contacts, contactsLoaded }) {
  if (contactsLoaded) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <SingleContactComponent
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              phoneNumber={item.phoneNumber}
            />
          )}
        />
      </View>
    );
  }
  return (
    <View>
      <Text>No contacts loaded...</Text>
    </View>
  );
}

export default ListsOfContacts;

ListsOfContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    contactType: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    phoneNumber: PropTypes.string,
  })),
  contactsLoaded: PropTypes.bool,
};
