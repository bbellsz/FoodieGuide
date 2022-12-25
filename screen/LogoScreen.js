import {StyleSheet, Button, View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import appStyles from '../assets/styles/appStyles';

const LogoScreen = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('MainPage');
  };
  return (
    <View style={appStyles.logoContainer}>
      <Image
        style={appStyles.logoImg}
        source={require('../assets/img/logo.png')}
      />
      <Pressable style={appStyles.btnLogoPress} onPress={onPress}>
        <Text style={appStyles.txtBtnPress2}>ENTER</Text>
      </Pressable>
    </View>
  );
};

export default LogoScreen;
