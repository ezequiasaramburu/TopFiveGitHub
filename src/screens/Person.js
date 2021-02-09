import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import AppStyles from '../style/AppStyles';
import colors from '../style/color';

const Person = ({ route }) => {
  const { user } = route.params;
  const avatar_url = {uri: user.avatar_url};

  return (
    <SafeAreaView style={AppStyles.container}>
      <View style={[AppStyles.content, styles.localContet]}>
        <Image style={styles.image} source={avatar_url}/>
        <View style={styles.textContent}>
          <Text style={styles.title}>{user.name}</Text>
          <Text style={styles.subTitle}>{user.location}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 90,
    width: 70,
    height: 70,
  },
  localContet: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  subTitle: {
    fontSize: 16,
    color: colors.silverGray
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContent: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  }
})

export default Person;