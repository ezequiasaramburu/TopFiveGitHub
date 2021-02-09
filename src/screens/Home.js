import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Octokit } from "@octokit/core"
import { apiConfig } from '../config/config';
import { usersNames } from '../utils/const';
import colors from '../style/color';
import AppStyles from '../style/AppStyles';

const octokit = new Octokit({ auth: apiConfig.gitHubToken });

const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUser = async (name) => {
    // TODO: move to an exlusive file for services
    const res = await octokit.request('GET /users/{username}', {
      username: name
    });
    if(res && users.length < 5) {
      users.push(res.data);
      setUsers(users);
      setLoading(false);
    }
  };

  useEffect(() => {
    usersNames.forEach(name => getUser(name));
  }, []);

  return (
    <SafeAreaView style={AppStyles.container}>
      {loading
        ? <Text>{'Loading'}</Text>
        : <View style={AppStyles.content}>
            <Text style={styles.title}>{'Top 5 GitHub users'}</Text>
            <Text style={styles.subTitle}>{'Tap the username to see more information'}</Text>
            <FlatList
              columnWrapperStyle={styles.flatList}
              data={loading ? [] : users}
              renderItem={(user) => {
                return (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Person', {user: user.item})}
                  >
                    <Text style={styles.buttonText}>{user.item.name}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(user, index) => index.toString()}
              numColumns={2}
            />
          </View>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    backgroundColor: colors.lightBlue,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  flatList: {
    flexWrap: 'wrap',
    flex: 1,
  },
  subTitle: {
    color: colors.black,
    fontSize: 18,
    paddingBottom: 10,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 15,
  }
})

export default Home;