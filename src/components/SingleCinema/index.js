import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';

function SingleCinema({ id, name, website, description, phone, address, city }) {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
          onPress={() => navigate('CinemaDetail', {
            cinemaId: id,
            cinemaName: name,
            cinemaPhone: phone,
            cinemaWebsite: website,
            cinemaDescription: description,
            cinemaAdress: address,
            cinemaCity: city
          })}
        >
    
          <View style={styles.singleCinemaContainer}>
            <Text style={styles.nameText}>
                {name}
                {address}
            </Text>
          </View>
        </TouchableOpacity>
      );
}

export default SingleCinema;