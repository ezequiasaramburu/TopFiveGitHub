import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Person = ({ route }) => {
  const { user } = route.params;
  return (
    <SafeAreaView>
      <Text>{"Person"}</Text>
    </SafeAreaView>
  )
}

export default Person;