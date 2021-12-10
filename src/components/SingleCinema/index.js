import React from 'react';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function SingleCinema({ cinema, name, website }) {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      key={cinema.id}
      onPress={() => navigate('CinemaDetail', {
        cinema,
      })}
      style={styles.button}
    >

      <View style={styles.singleCinemaContainer}>
        <Text style={styles.CinemaName}>
          {name}
        </Text>
        <Text style={styles.WebsiteText}>
          Website:
          {' '}
          {website}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default SingleCinema;
