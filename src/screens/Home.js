import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Octokit } from "@octokit/core"
import { apiConfig } from '../config/config';
import { usersNames } from '../utils/const';

const octokit = new Octokit({ auth: apiConfig.gitHubToken });

const Home = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  const getUser = async (name) => {
    const res = await octokit.request('GET /users/{username}', {
      username: name
    });
    setUsers(res.data);
  };

  useEffect(() => {
    usersNames.forEach(name => getUser(name))
  }, []);

  console.log('WEP', users.id);
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