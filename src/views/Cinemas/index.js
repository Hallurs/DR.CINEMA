import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

function Cinemas() {
    const loadCinemas = async() => {
      const url = 'https://api.kvikmyndir.is/theaters';
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MWFkZTkxY2ExMTQ0MDFmNDU2NWRmOTkiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhhbGx1ciBIZXJtYW5uc3NvbiBBc3BhciIsImVtYWlsIjoiaGFsbHVyaEA3dW5kLmlzIiwidXNlcm5hbWUiOiJoYWxsaSIsInBhc3N3b3JkIjoiJDJhJDA4JGI1N1QvUXV2T2hSNkI1Tmx6OWcwSk9lbHhjaElLMGg2Zy9Ebi5IcWpIYlRSbDhUd3NvMmpxIiwiZG9tYWluIjoiaGFsbGkiLCJtZXNzYWdlIjoic2Nob29sIHByb2plY3QsIMO-csOzdW4gc23DoWZvcnJpdGEiLCJpYXQiOjE2Mzg5NDk1MDYsImV4cCI6MTYzOTAzNTkwNn0.d_az9zWGlkoEGUMf9ZQoHt3UPHXlQs5bdIzyZojGFGc";     
      let config = {
        headers: {
          "x-access-token" : token
        }
      }
    
      return await axios.get(url, config);
      
    };
  
    const [filteredDataSource, setFilteredDataSource] = useState([]);
  
    useEffect(() => {
        (async () => {
          const cinemasTempData = await loadCinemas();
          setFilteredDataSource(cinemasTempData.data.sort((a, b) => a.name.localeCompare(b.name)));
        })();
      }, []);
    
    return(
      <View>
        {filteredDataSource?.map(cinema => {
          return (
            <TouchableOpacity key={cinema.id}>
              <View>
                <Text>{cinema.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

export default Cinemas;