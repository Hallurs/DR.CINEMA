import React from 'react';
import { View, FlatList } from 'react-native';
import SingleCinema from '../SingleCinema';

function CinemaList({ cinemas }) {
    return (
        <View>
            <FlatList
            data={cinemas}
            renderItem={({ item }) => (
                <SingleCinema
                    key={item.id}
                    cinema={item}
                    name={item.name}
                    website={item.website}
                    />
            )}
            />
        </View>
    );
};

export default CinemaList;