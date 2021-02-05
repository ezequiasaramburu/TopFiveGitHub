import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>{'Home'}</Text>
      <Button
        title={'Click me'}
        onPress={() => navigation.navigate('Person')}
      />
    </SafeAreaView>
  );
};

export default Home;