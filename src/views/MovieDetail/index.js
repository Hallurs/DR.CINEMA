import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, Linking, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import axios from 'axios';

function MovieDetail({ route }) {

  const { cinemaId, movieName } = route.params;

  const loadFilm = async() => {
    const url = `https://api.kvikmyndir.is/movies/?title=${movieName}`;
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFkZTkxY2ExMTQ0MDFmNDU2NWRmOTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhhbGx1ciBIZXJtYW5uc3NvbiBBc3BhciIsImVtYWlsIjoiaGFsbHVyaEA3dW5kLmlzIiwidXNlcm5hbWUiOiJoYWxsaSIsInBhc3N3b3JkIjoiJDJhJDA4JGI1N1QvUXV2T2hSNkI1Tmx6OWcwSk9lbHhjaElLMGg2Zy9Ebi5IcWpIYlRSbDhUd3NvMmpxIiwiZG9tYWluIjoiaGFsbGkiLCJtZXNzYWdlIjoic2Nob29sIHByb2plY3QsIMO-csOzdW4gc23DoWZvcnJpdGEiLCJpYXQiOjE2MzkwMzkyMTEsImV4cCI6MTYzOTEyNTYxMX0.sGum5GiEaDQ0eeSyoGOvSLxBT1PKE5uhOsjtN-AzFH4";     
    let config = {
      headers: {
        "x-access-token" : token
      }
    }
    return axios.get(url, config);
  };
  
  // Borrowed from here -> https://www.codegrepper.com/code-examples/javascript/get+youtube+video+id+from+url+in+react+native
  // Credit to Lokesh003Coding
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
  
    const [filmData, setFilmData] = useState();
  
    useEffect(() => {
        (async () => {
          const filmTempData = await loadFilm();
          setFilmData(filmTempData.data);
        })();
      }, []);

    return (
      <ScrollView style={styles.container}> 
        {filmData?.map(film => {
          return (
              <View key={film.id}>
                <Text>Film title: {film.title}</Text>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: film.poster }}
                />
                <Text>Run time in minutes: {film.durationMinutes}</Text>
                <Text>Release year: {film.year}</Text>
                <View style={styles.genresContainer}>
                  <Text> GENRES: </Text>
                  {film?.genres?.map(genre => <Text key={genre.ID} style={styles.singleGenre}>{genre.Name}</Text>)}
                </View>
                {
                  film?.trailers[0]?.results[0]?.url
                  ?
                  <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={youtube_parser(film?.trailers[0]?.results[0].url)}
                  />
                  :
                  <></>
                }
                <Text>Times Of showing:</Text>
                {film?.showtimes?.map(theater =>
                  [theater]?.map(TheaterAndshowTime => /* TODO add in here a check for the id of the theater*/
                    TheaterAndshowTime?.cinema?.id === cinemaId
                    ?
                    TheaterAndshowTime?.schedule?.map(showTimes =>
                      {
                        return (
                          <View style={styles.TimeOfShowingContainer} key={TheaterAndshowTime.id}>
                            <Text>{showTimes?.time}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(showTimes?.purchase_url)}>
                              <Text style={styles.buttonText}>Purchase ticket!</Text>
                            </TouchableOpacity>
                          </View>
                        )
                      }
                    )
                    :
                    <></>
                    ))}
              </View>
          )
        })}
      </ScrollView>
    );
  }

export default MovieDetail;
