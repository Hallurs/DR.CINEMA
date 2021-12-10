import React from 'react';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function MovieList({ movie, cinemaId }) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      key={cinemaId}
      onPress={() => navigate('MovieDetail', {
        cinemaId: cinemaId,
        movieName: movie.title,
      })}
    >

      <View
        style={styles.singleCinemaContainer}
      >

        <Image
          style={styles.image}
          source={{ uri: movie.poster }}
        />
        <Text style={styles.nameText}>
          {movie.title}
        </Text>
        <Text>
          {movie.year}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MovieList;
