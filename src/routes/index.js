import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Import view components */
import Cinemas from '../views/Cinemas';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cinemas">
        <Stack.Screen name="Cinemas" component={Cinemas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
