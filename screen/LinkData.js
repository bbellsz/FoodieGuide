import {
  ScrollView,
  StyleSheet,
  View,
  Input,
  Button,
  CheckBox,
  TextInput,
  Image,
  FlatList,
  Text,
  Separator,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const LinkData = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('restaurant')
      .onSnapshot(querySnapshot => {
        const restaurant = [];

        querySnapshot.forEach(documentSnapshot => {
          restaurant.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setName(restaurant);
        console.log(restaurant);
      });
    return () => subscriber();
  }, []);

  return (
    <View>
      <Text>listFirebase</Text>
      <FlatList data={name} renderItem={({item}) => <Text>{item.name}</Text>} />
    </View>
  );
};

export default LinkData;
