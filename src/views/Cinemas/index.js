import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CinemaList from '../../components/CinemaList';
import loadCinemas from '../../services/cinemaService';

function Cinemas() {
  
    const [filteredDataSource, setFilteredDataSource] = useState([]);
  
    useEffect(() => {
        (async () => {
          const cinemasTempData = await loadCinemas();
          setFilteredDataSource(cinemasTempData.data.sort((a, b) => a.name.localeCompare(b.name)));
        })();
      }, []);
    
    return(
      <View>
        <CinemaList
        cinemas={filteredDataSource}
      />
      </View>
    )
  }

export default Cinemas;