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

const Login = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('MainPage');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}>Welcome back!</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" />
      <Text></Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcd9b',
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
    height: 400,
    width: 400,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#f19b38',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textBlack: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 45,
    fontSize: 14,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  label: {
    paddingLeft: 6,
    marginVertical: 6,
    fontSize: 15,
    color: 'black',
    textAlign: 'left',
  },
});

export default Login;
