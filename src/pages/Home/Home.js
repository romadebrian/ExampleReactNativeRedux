import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const dataUser = useSelector(state => state.dataUser);
  console.log(dataUser);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Text>Welcome {dataUser?.email}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
