import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Person from '../screens/Person';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Person" component={Person}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}