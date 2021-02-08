import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Person from '../screens/Person';
import colors from '../style/color';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle
            }}
          />
          <Stack.Screen
            name="Person"
            component={Person}
            options={{
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTitle,
              headerTintColor: colors.white
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

const styles = new StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: colors.black,
  },
  headerTitle: {
    color: colors.white,
    alignSelf: 'center'
  }
});