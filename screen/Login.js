import {
  StyleSheet,
  CheckBox,
  Button,
  TextInput,
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import appStyles from '../assets/styles/appStyles';
const Login = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('MainPage');
  };
  return (
    <View style={appStyles.loginContainer}>
      <Text style={appStyles.restaurantTxtName}>Welcome back!</Text>
      <Text style={appStyles.loginInfo}>Username</Text>
      <TextInput style={appStyles.input} placeholder="Username" />
      <Text style={appStyles.loginInfo}>Password</Text>
      <TextInput style={appStyles.input} placeholder="Password" />
      <Text></Text>
      <Pressable style={appStyles.btnLoginPress2} onPress={onPress}>
        <Text style={appStyles.txtBtnPress}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
