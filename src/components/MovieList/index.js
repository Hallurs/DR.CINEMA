import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

function MovieList({ movie, cinemaId }) {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
          onPress={() => navigate('MovieDetail', {
              movie: movie
          })}
        >
    
          <View 
            style={styles.singleCinemaContainer}
            key={cinemaId}>
                
                <Image 
                style={styles.image}
                source={{ uri: movie.poster}}
                />
                <Text style={styles.nameText}>
                    {movie.title}
                </Text>
                <Text style={styles.nameText}>
                    {movie.year}
                </Text>
                {movie?.genres?.map(genre => <Text key={genre.ID}>{genre.Name}</Text>)}
                
          </View>
        </TouchableOpacity>
      );
}

export default MovieList;