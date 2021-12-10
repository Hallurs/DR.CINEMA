import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CinemaList from '../../components/CinemaList';
import styles from '../../components/SingleCinema/styles';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { getUpcomingFilms } from '../../actions/filmActions';

function UpcomingMovies() {
  
    const dispatch = useDispatch();
    
    useEffect(() => {
        (() => {
          dispatch(getUpcomingFilms());
        })();
      }, []);
    
    const upcomingFilms = useSelector(state => state.upcomingFilms);

    return(
        <ScrollView>
            <View>
                {upcomingFilms?.map(singleMovie =>
                <UpcomingMovieList
                    key={singleMovie.id}
                    UpComingMovie={singleMovie} />  
                )}
            </View>
        </ScrollView>
    );
}

export default UpcomingMovies;