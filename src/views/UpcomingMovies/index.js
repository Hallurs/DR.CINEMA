import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import UpcomingMovieList from '../../components/UpcomingMovieList';

import { getUpcomingFilms } from '../../actions/filmActions';

function UpcomingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getUpcomingFilms());
    })();
  }, []);

  const upcomingFilms = useSelector((state) => state.upcomingFilms);

  return (
    <ScrollView>
      <View>
        {upcomingFilms?.map((singleMovie) => (
          <UpcomingMovieList
            key={singleMovie.id}
            UpComingMovie={singleMovie}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default UpcomingMovies;
