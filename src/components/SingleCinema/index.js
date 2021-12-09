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
            cinemaAddress: address,
            cinemaCity: city
          })}
          style={styles.button}
        >
    
          <View style={styles.singleCinemaContainer}>
            <Text style={styles.CinemaName}>
                {name}
            </Text>
            <Text style={styles.WebsiteText}>
              Website: {website}
            </Text>
          </View>
        </TouchableOpacity>
      );
}

export default SingleCinema;