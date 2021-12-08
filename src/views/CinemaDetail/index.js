import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const CinemaDetail = ({route}) => {
    // const { cinemaId } = route.params;
    const { cinemaId } = 4;


    
    useEffect(() => {
        (async () => {

        })();
    }, []);

    return(
        <View style={styles.container}>
            <Text>Cinema</Text>
            {/* <ListsOfTasks 
                lists = {tasksLists}
                selectedTasks={selectedTasks}
                onLongPress={name => onTaskLongPress(name)} 
                onValueChange={id => checkboxPressed(id)}
                /> */}
        </View>
    )
};

export default CinemaDetail;