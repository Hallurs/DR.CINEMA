import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import SingleCinema from '../SingleCinema';


function CinemaList({ cinemas }) {
    return (
        <View>
            <FlatList
            data={cinemas}
            renderItem={({ item }) => (
                <SingleCinema
                    cinema={item}
                    name={item.name}
                    website={item.website}
                />
            )}
            />
        </View>
    );
};

export default CinemaList