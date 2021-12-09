import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CinemaList from '../../components/CinemaList';
import styles from '../../components/SingleCinema/styles';
import loadUpcomingMovies from '../../services/UpcomingMovieList';
import UpcomingMovieList from '../../components/UpcomingMovieList';
import { ScrollView } from 'react-native-gesture-handler';

function UpcomingMovies() {
    const [filteredDataSource, setFilteredDataSource] = useState([]);
  
    useEffect(() => {
        (async () => {
          const filmTempData = await loadUpcomingMovies();
          setFilteredDataSource(filmTempData.data.sort((a, b) => a["release-dateIS"].localeCompare(b["release-dateIS"])));
        })();
      }, []);

    return(
        <ScrollView>
            <View>
                {filteredDataSource?.map(allMovies =>
                <UpcomingMovieList
                key={allMovies.id}
                UpComing={allMovies} />  
                )}
            </View>
        </ScrollView>
    );
}

export default UpcomingMovies;