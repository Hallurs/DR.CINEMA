import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, Linking, ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { getSingleFilm } from '../../actions/singleFilmActions'
import { useSelector } from 'react-redux';
import SingleFilm from '../../components/SingleFilm';

function MovieDetail({ route }) {

  const { cinemaId, movieName } = route.params;
  
    const dispatch = useDispatch();

    useEffect(() => {
        (() => {
          dispatch(getSingleFilm(movieName));
        })();
      }, []);
    
    const filmData = useSelector(state => state.singleFilm);
    console.log("oingo2", filmData[0]);

    if (filmData && Object.keys(filmData).length === 0) {
      return <View></View>;
    }

    return (   
      <SingleFilm 
        filmData={filmData}
        cinemaId={cinemaId}
      />
  );
}

export default MovieDetail;
