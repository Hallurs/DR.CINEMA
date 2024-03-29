import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CinemaList from '../../components/CinemaList';
import { loadCinemas } from '../../actions/cinemasActions';

function Cinemas() {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(loadCinemas());
    })();
  }, []);

  const cinemas = useSelector((state) => state.cinemas);

  return (
    <View>
      <CinemaList
        cinemas={cinemas}
      />
    </View>
  );
}

export default Cinemas;
