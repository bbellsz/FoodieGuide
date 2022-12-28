import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogoScreen from './screen/LogoScreen';
import Login from './screen/Login';
import MainPage from './screen/MainPage';
import Restaurant from './screen/Restaurant';
import ReviewPage from './screen/ReviewPage';
import Profile from './screen/Profile';
import Search from './screen/Search';
import Result from './screen/Result';
import AddReview from './screen/AddReview';

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
          name="Search"
          component={Search}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />

        <Stack.Screen
          name="AddReview"
          component={AddReview}
          options={{
            title: 'FOODIE GUIDE',
            headerStyle: {
              backgroundColor: '#ffcd9b',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontFamily: 'MN Tomyam',
              padding: 10,
              margin: 5,
              fontSize: 26,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
