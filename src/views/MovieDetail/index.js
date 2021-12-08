import React, { useState, useEffect } from 'react';
import {
  View, Text, Image,
} from 'react-native';
import styles from './styles';
import axios from 'axios';

function MovieDetail() {
    const loadFilm = async() => {
      const url = 'https://api.kvikmyndir.is/movies/?title=Dear Comrades!';
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFkZTkxY2ExMTQ0MDFmNDU2NWRmOTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhhbGx1ciBIZXJtYW5uc3NvbiBBc3BhciIsImVtYWlsIjoiaGFsbHVyaEA3dW5kLmlzIiwidXNlcm5hbWUiOiJoYWxsaSIsInBhc3N3b3JkIjoiJDJhJDA4JGI1N1QvUXV2T2hSNkI1Tmx6OWcwSk9lbHhjaElLMGg2Zy9Ebi5IcWpIYlRSbDhUd3NvMmpxIiwiZG9tYWluIjoiaGFsbGkiLCJtZXNzYWdlIjoic2Nob29sIHByb2plY3QsIMO-csOzdW4gc23DoWZvcnJpdGEiLCJpYXQiOjE2Mzg4NzQwMjgsImV4cCI6MTYzODk2MDQyOH0.845jBa1iRky6wNJdQoZNQHWOdwnsJ4fd0W_34ZX6HB0";     
      let config = {
        headers: {
          "x-access-token" : token
        }
      }
      return axios.get(url, config);
    };
  
    const [filmData, setFilmData] = useState();
  
    useEffect(() => {
        (async () => {
          const filmTempData = await loadFilm();
          setFilmData(filmTempData.data);
        })();
      }, []);
    return (
      <View> 
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
                {film?.genres?.map(genre => <Text key={genre.ID}>{genre.Name}</Text>)}
              </View>
          )
        })}
      </View>
    );
  }

export default MovieDetail;
