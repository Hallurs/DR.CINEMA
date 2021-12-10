import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import loadMovies from '../../services/listOfMovieService';
import MovieList from '../../components/MovieList';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

function CinemaDetail({ route }) {

    const {
        cinemaId, cinemaName, cinemaPhone, cinemaWebsite, cinemaDescription, cinemaAddress, cinemaCity,
      } = route.params;

    
    const [moviesData, setMovies] = useState([]);
    const [movieList, setMovieList] = useState();

    const htmlTagRemover = (description) => {
        // this was taken from stack overflow
        // url: https://stackoverflow.com/questions/48766615/how-to-remove-html-tags-from-json-data-in-react-native
        // author: Sid
        const regex = /(<([^>]+)>)/ig;
        const result = description.replace(regex, '');
        return result;
    }

    useEffect(() => {
    (async () => {
        const cinemasTempData = await loadMovies();
        setMovieList(cinemasTempData.data);
        
    })();
    }, []);
    
    return (
        <ScrollView key={cinemaId}>
            <View style={styles.container}>               
                <Text style={styles.nameText}>
                    {cinemaName}
                </Text>
                <View>
                    {
                        cinemaDescription
                           
                        ? (
                            <Text>
                                {htmlTagRemover(cinemaDescription)}
                            </Text>
                        )
                        : (
                        <></>
                        )
                    }
                </View>
                <Text>
                    {cinemaWebsite}
                </Text>
                <Text>
                    {cinemaAddress}
                </Text>
                <Text>
                    {cinemaCity}
                </Text>
                <Text>
                    {cinemaPhone}
                </Text>
            </View> 
            {movieList?.map(allallmovies => 
                
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
        </ScrollView>

        
      );
}

export default CinemaDetail;