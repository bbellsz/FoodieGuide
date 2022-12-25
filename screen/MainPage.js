import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  FlatList,
  StatusBar,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import appStyles from '../assets/styles/appStyles';

const MainPage = ({navigation, route}) => {
  const restaurant = () => {
    navigation.navigate('Restaurant');
  };
  const login = () => {
    navigation.navigate('Login');
  };
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    firestore()
      .collection('restaurant')
      .get()
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          data.push({
            ...documentSnapshot.data(),
          });

          setName(data);
          console.log(data);
        });
      });

    console.log(name);
  }, []);

  function renderItem({item}) {
    return (
      <View>
        <TouchableOpacity
          style={{borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
          <View>
            <Image source={{uri: item.image}} />
          </View>

          <Text style={styles.button}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [text, onChangeText] = React.useState('search');
  return (
    <View style={appStyles.containerMain}>
      <View style={appStyles.headerMain}>
        <View style={appStyles.fixToText}>
          <Text style={appStyles.txtAppName}>FOODIE GUIDE</Text>
          <Pressable style={appStyles.btnLoginPress} onPress={login}>
            <Text style={appStyles.txtBtnPress}>Login</Text>
          </Pressable>
        </View>
      </View>

      <SafeAreaView style={appStyles.container}>
        <ScrollView style={appStyles.scrollView}>
          <View style={appStyles.searchBox}>
            <TextInput style={appStyles.searchTxt} placeholder="Search" />
          </View>
          <Text></Text>
          <View style={appStyles.mainPageBox}>
            <View>
              <FlatList
                data={name}
                renderItem={({item}) => (
                  <View>
                    <Image
                      source={{uri: item.image}}
                      style={appStyles.restaurantImg}
                    />
                    <Text style={appStyles.restaurantTxtName}>
                      {item.name}{' '}
                    </Text>

                    <Text style={appStyles.restaurantInfo}>
                      <Image
                        style={appStyles.iconSize}
                        source={require('../assets/img/star_filled.png')}
                      />
                      {' 4.9'}
                      {' 2 เรตติ้ง (2 รีวิว)'}
                      {'\n ประเภทอาหาร: '}
                      {'\n เปิดวัน: '}
                      {item.day}
                    </Text>
                    <Text style={appStyles.restaurantDescript}>
                      {'\t'}
                      {item.description}
                    </Text>
                    <Pressable
                      style={appStyles.btnViewPress}
                      onPress={restaurant}>
                      <Text style={appStyles.btnTxt}>View</Text>
                    </Pressable>
                    <View
                      style={{
                        flexDirection: 'row',
                        paddingTop: 20,
                      }}></View>
                  </View>
                )}
              />
              <View></View>
            </View>
          </View>
          <FlatList>
            data={name}
            renderItem={renderItem}
          </FlatList>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MainPage;
