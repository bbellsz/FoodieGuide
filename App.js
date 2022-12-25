import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoScreen from './screen/LogoScreen';
import Login from './screen/Login';
import MainPage from './screen/MainPage';
import Restaurant from './screen/Restaurant';
import ReviewPage from './screen/ReviewPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogoScreen"
          component={LogoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ReviewPage"
          component={ReviewPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
