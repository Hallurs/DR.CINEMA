import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleFilm } from '../../actions/filmActions';
import SingleFilm from '../../components/SingleFilm';

function MovieDetail({ route }) {
  const { cinemaId, movieName } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getSingleFilm(movieName));
    })();
  }, []);

  const filmData = useSelector((state) => state.singleFilm);

  if (filmData && Object.keys(filmData).length === 0) {
    return <View />;
  }

  return (
    <SingleFilm
      filmData={filmData}
      cinemaId={cinemaId}
    />
  );
}

export default MovieDetail;
