import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Import view components */

import CinemaDetail from '../views/CinemaDetail';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CinemaDetail">
        <Stack.Screen name="CinemaDetail" component={CinemaDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
