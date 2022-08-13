import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setEmail, setPassword} from '../../config/dataUser';
import {useState} from 'react';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmailLocal] = useState('');
  const [password, setPasswordLocal] = useState('');

  const handleLogin = () => {
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    navigation.navigate('Home');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Login</Text>
      <View style={{width: '100%'}}>
        <TextInput
          placeholder="Email"
          style={{borderWidth: 1}}
          onChangeText={setEmailLocal}
        />
        <TextInput
          placeholder="Password"
          style={{borderWidth: 1}}
          onChangeText={setPasswordLocal}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
