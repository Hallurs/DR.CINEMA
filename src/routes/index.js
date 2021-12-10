import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Import view components */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import UpcomingMovies from '../views/UpcomingMovies';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cinema" component={Cinemas} />
      <Tab.Screen name="UpComing Movies" component={UpcomingMovies} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cinemas">
        <Stack.Screen name="Cinemas" component={TabRoutes} />
        <Stack.Screen name="CinemaDetail" component={CinemaDetail} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
