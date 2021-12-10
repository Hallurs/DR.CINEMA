import React from 'react';
import {
  View, Text, Image, Linking, ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';

// Borrowed from here -> https://www.codegrepper.com/code-examples/javascript/get+youtube+video+id+from+url+in+react+native
// Credit to Lokesh003Coding
function youtubeParser(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : false;
}

function SingleFilm({ filmData, cinemaId }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {filmData.map((film) => (
        <View style={styles.ViewContainer} key={film.id}>
          <Text style={styles.nameText}>
            {film.title}
          </Text>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: film.poster }}
          />
          <Text style={styles.normalText}>
            Run time in minutes:
            {' '}
            {film.durationMinutes}
            {'\n'}
            Release year:
            {' '}
            {film.year}
          </Text>
          <View style={styles.genresContainer}>
            <Text style={styles.nameText}> GENRES: </Text>
            {film?.genres?.map((genre) => <Text key={genre.ID} style={styles.singleGenre}>{genre.Name}</Text>)}
          </View>
          {
                        film?.trailers[0]?.results[0]?.url
                          ? (
                            <YoutubePlayer
                              height={300}
                              width={400}
                              play={false}
                              videoId={youtubeParser(film?.trailers[0]?.results[0].url)}
                            />
                          )
                          : <></>
                    }
          <Text style={styles.nameText}>Times Of showing:</Text>
          {film?.showtimes?.map((theater) => [theater]?.map((TheaterAndshowTime) => (TheaterAndshowTime?.cinema?.id === cinemaId
            ? TheaterAndshowTime?.schedule?.map((showTimes) => (
              <View style={styles.TimeOfShowingContainer} key={TheaterAndshowTime.id}>
                <Text>{showTimes?.time}</Text>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(showTimes?.purchase_url)}>
                  <Text style={styles.buttonText}>Purchase ticket!</Text>
                </TouchableOpacity>
              </View>
            ))
            : <></>)))}
        </View>
      ))}
    </ScrollView>
  );
}

export default SingleFilm;
