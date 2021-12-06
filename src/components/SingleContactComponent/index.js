import React from 'react';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';

function SingleContactComponent({
  id, name, image, phoneNumber,
}) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate('ContactInfo', {
        contactId: id,
        contactName: name,
        contactPhone: phoneNumber,
        contactImage: image,
      })}
    >

      <View style={styles.singleContactContainer}>
        {image
          ? (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: image }}
            />
          )
          : (
            <View>
            </View>
          )}
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SingleContactComponent;

SingleContactComponent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  phoneNumber: PropTypes.string,

};
