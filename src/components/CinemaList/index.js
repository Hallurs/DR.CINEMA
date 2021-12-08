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
                id={item.id}
                name={item.name}
                website={item.website}
                description={item.description}
                phone={item.phone}
                address={item["address\t"]}
                city={item.city}
                />
            )}
            />
        </View>
    );
};

export default CinemaList