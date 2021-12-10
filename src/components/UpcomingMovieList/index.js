import React, {useState} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import { AntDesign } from '@expo/vector-icons';

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function UpcomingMovieList({ UpComingMovie }) {

    const [openedTrailer, setOpenedTrailer] = useState(false);
    const toggleTrailerOpenedOrClosed = () => {
        setOpenedTrailer(!openedTrailer);
    };

    return(
        <View 
        style={styles.singleUpcomingMovieContainer}
        key={UpComingMovie.id}>
            <Text style={styles.nameText}>
                {UpComingMovie.title}{'\n'}
                Release: {UpComingMovie["release-dateIS"]}
            </Text>
            {   
                openedTrailer
                ?
                (
                    UpComingMovie?.trailers[0]?.results[0]?.url
                    ?
                    <View>
                        <YoutubePlayer
                            height={300}
                            width={400}
                            play={true}
                            videoId={youtube_parser(UpComingMovie?.trailers[0]?.results[0].url)}
                        />
                    </View>
                    :
                    <TouchableOpacity style={styles.singleUpcomingMovieContainer} onPress={() => toggleTrailerOpenedOrClosed()}>
                        <Image
                            style={styles.image}
                            source={{ uri: UpComingMovie.poster}}
                        />
                    </TouchableOpacity>
                )
                :
                (
                    
                    <TouchableOpacity style={styles.singleUpcomingMovieContainer} onPress={() => toggleTrailerOpenedOrClosed()}>
                        <Image
                            style={styles.image}
                            source={{ uri: UpComingMovie.poster}}
                        />
                        {
                            UpComingMovie?.trailers[0]?.results[0]?.url
                            ?
                            <AntDesign name="caretright" style={styles.checkmark} />
                            :
                            <></>
                        }
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

export default UpcomingMovieList;