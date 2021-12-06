import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Import view components */
import ContactsPage from '../views/ContactsPage';
import ContactInfo from '../views/ContactInfo';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactsPage">
        <Stack.Screen name="ContactsPage" component={ContactsPage} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
