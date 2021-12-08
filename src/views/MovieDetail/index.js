import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, Linking, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import axios from 'axios';

function MovieDetail() {
    const loadFilm = async() => {
      const url = 'https://api.kvikmyndir.is/movies/?title=Dear Comrades!';
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFlMDE3ZGExMTQ0MDFmNDU2NWRmYTYiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkR1bWJ5IiwiZW1haWwiOiJpY2VsYW5kMjcwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiY29vbGd1eSIsInBhc3N3b3JkIjoiJDJhJDA4JDRXZ0VLNldKSWlCd0w2d09hV0ZnTnV0QVlZOUhxUUpHUncya3JUTEViSURBTVRpZVIwMFptIiwiZG9tYWluIjoibnVucy5jb20iLCJtZXNzYWdlIjoiU3R1ZGVudCBwcm9qZWN0IiwiaWF0IjoxNjM4OTcxNzc5LCJleHAiOjE2MzkwNTgxNzl9.BpBFJB8paeRJT0K28odBZNVHz5iO43E7qIdfp-aac8o";     
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
                {console.log(film?.trailers[0]?.results[0]?.url)}
                {
                  film?.trailers[0]?.results[0]?.url
                  ?
                  <YoutubePlayer
                    height={300}
                    play={true}
                    videoId={youtube_parser(film?.trailers[0]?.results[0].url)}
                  />
                  :
                  <></>
                }
                <Text>Times Of showing:</Text>
                {film?.showtimes?.map(theater =>
                  [theater]?.map(TheaterAndshowTime => /* TODO add in here a check for the id of the theater*/
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
                    )))}
              </View>
          )
        })}
      </ScrollView>
    );
  }

export default MovieDetail;
