import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';

function SingleCinema({ cinema, name, website }) {
    const { navigate } = useNavigation();
  
    return (
        <TouchableOpacity
          onPress={() => navigate('CinemaDetail', {
            cinema: cinema
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