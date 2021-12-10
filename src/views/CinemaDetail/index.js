import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MovieList from '../../components/MovieList';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { getAllFilms } from '../../actions/filmActions'
import { useSelector } from 'react-redux';
import styles from './styles';

function CinemaDetail({ route }) {

    const {
        cinemaId, cinemaName, cinemaPhone, cinemaWebsite, cinemaDescription, cinemaAddress, cinemaCity,
      } = route.params;

    const htmlTagRemover = (description) => {
        // this was taken from stack overflow
        // url: https://stackoverflow.com/questions/48766615/how-to-remove-html-tags-from-json-data-in-react-native
        // author: Sid
        const regex = /(<([^>]+)>)/ig;
        const result = description.replace(regex, '');
        return result;
    }

    const dispatch = useDispatch();

    useEffect(() => {
        (() => {
          dispatch(getAllFilms());
        })();
      }, []);
    
    const films = useSelector(state => state.films);
    
    return (
        <ScrollView key={cinemaId}>
            <View style={styles.container}>               
                <Text style={styles.nameText}>
                    {cinemaName}
                </Text>
            </View> 
            {films?.map(allallmovies => 
                [allallmovies]?.map(allMovies =>
                    [allMovies]?.map(Movie =>
                        [Movie]?.map(TheaterAndshowTime =>
                            TheaterAndshowTime?.showtimes?.map(showtime =>
                                /* console.log(showtime?.cinema) */
                                showtime?.cinema?.id === cinemaId
                                ?
                                   <MovieList 
                                   movie={TheaterAndshowTime} 
                                   cinemaId={cinemaId} 
                                   id={TheaterAndshowTime.id}/>
                                    
                                :
                                    <View>
                                    </View>
                            )
                        )
                    )
                ))}
            {/* <Text style={styles.descriptionTitle}>
                Description
            </Text> */}
            {
                cinemaDescription
                    
                ? (
                    <View>
                        <Text style={styles.descriptionTitle}>
                            Description
                        </Text>
                        <Text style={styles.descriptionText}>
                            {htmlTagRemover(cinemaDescription)}
                        </Text>
                    </View>
                )
                : (
                <></>
                )
            }
            <Text style={styles.descriptionTitle}>
                Theater information
            </Text>
            <Text style={styles.descriptionText}>
                {cinemaWebsite}{'\n'}{cinemaAddress}{'\n'}{cinemaCity}{'\n'}{cinemaPhone}
            </Text>
        </ScrollView>

        
      );
}

export default CinemaDetail;