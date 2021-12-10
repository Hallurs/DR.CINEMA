import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllFilms } from '../../actions/filmActions';

import SingleCinemaWithDetail from '../../components/SingleCinemaWithDetail';

function CinemaDetail({ route }) {
  const { cinema } = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getAllFilms());
    })();
  }, []);

  const films = useSelector((state) => state.films);

  return (

    <SingleCinemaWithDetail
      key={cinema.id}
      films={films}
      cinema={cinema}
    />

  );
}

export default CinemaDetail;
