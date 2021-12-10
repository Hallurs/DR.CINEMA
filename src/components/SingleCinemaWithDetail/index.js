import React from 'react';
import {
  View, Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MovieList from '../MovieList';
import styles from './styles';

const htmlTagRemover = (description) => {
  // this was taken from stack overflow
  // url: https://stackoverflow.com/questions/48766615/how-to-remove-html-tags-from-json-data-in-react-native
  // author: Sid
  const regex = /(<([^>]+)>)/ig;
  const result = description.replace(regex, '');
  return result;
};

function SingleCinemaWithDetail({ films, cinema }) {
  return (
    <ScrollView key={cinema.id} contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
      <View key={cinema.id} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.nameText}>
            {cinema.name}
          </Text>
        </View>
        {films?.map((allallmovies) => [allallmovies]?.map((allMovies) => [allMovies]?.map((Movie) => [Movie]?.map((TheaterAndshowTime) => TheaterAndshowTime?.showtimes?.map((showtime) => (showtime?.cinema?.id === cinema.id
          ? (
            <MovieList
              key={TheaterAndshowTime.id}
              movie={TheaterAndshowTime}
              cinemaId={cinema.id}
              id={TheaterAndshowTime.id}
            />
          )

          : <></>))))))}
        {
                    cinema.description
                      ? (
                        <View>
                          <Text style={styles.descriptionTitle}>
                            Description
                          </Text>
                          <Text style={styles.descriptionText}>
                            {htmlTagRemover(cinema.description)}
                          </Text>
                        </View>
                      )
                      : (
                        <></>
                      )
                }
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>
            Theater information
          </Text>
          <Text style={styles.InformationText}>
            {cinema.website}
            {'\n'}
            {cinema.address}
            {'\n'}
            {cinema.city}
            {'\n'}
            {cinema.phone}
          </Text>
        </View>
      </View>
    </ScrollView>

  );
}
export default SingleCinemaWithDetail;
