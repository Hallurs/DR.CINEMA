import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

function UpcomingMovieList({ UpComing }) {
    return(
        <View 
        style={styles.singleUpcomingMovieContainer}
        key={UpComing.id}>
            <TouchableOpacity style={styles.singleUpcomingMovieContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: UpComing.poster}}
                />
            </TouchableOpacity>
            <Text style={styles.nameText}>
                    {UpComing.title}{'\n'}
                    Release: {UpComing["release-dateIS"]}
            </Text>
        </View>
    );
}

export default UpcomingMovieList;