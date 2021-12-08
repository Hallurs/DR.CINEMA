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
        {/* {filteredDataSource?.map(cinema => {
          return (
            <TouchableOpacity key={cinema.id}>
              <View>
                <Text>{cinema.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })} */}
        <CinemaList
        cinemas={filteredDataSource}
      />
      </View>
    )
  }

export default Cinemas;