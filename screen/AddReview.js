import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Input,
  Alert,
  SafeAreaView,
  Pressable,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import appStyles from '../assets/styles/appStyles';
const Separator = () => <View style={appStyles.separator} />;
// const Restaurant = ({navigation}) => {
//   const onPress = () => {
//     navigation.navigate('ReviewPage');
//   };

const AddReview = ({navigation, route}) => {
  const onPress = () => {
    navigation.navigate('AddReview');
  };
  const [topic, setTopic] = useState('');
  const [detail, setDetail] = useState('');
  const [rating, setRating] = useState('');
  const [menu, setMenu] = useState('');

  const addReview = async () => {
    await firestore()
      .collection('reviews')
      .add({
        userID: auth().currentUser.uid,
        topic: topic,
        detail: detail,
        rating: rating,
        menu: menu,
      })
      .then(() => {
        console.log('yas');
        alert('add');
        navigation.navigate('Restaurant');
      });
  };

  return (
    <View style={appStyles.containerMain}>
      <SafeAreaView style={appStyles.container}>
        <ScrollView style={appStyles.scrollView}>
          <View>
            <Input
              placeholder="Topic"
              onChangeText={value => setTopic(value)}
            />
            <Input
              placeholder="Detail"
              onChangeText={value => setDetail(value)}
            />
            <Input
              placeholder="Rating"
              onChangeText={value => setRating(value)}
            />
            <Input placeholder="menu" onChangeText={value => setMenu(value)} />
            <Button
              title="บันทึก"
              onPress={() => addReview()}
              buttonStyle={{backgroundColor: 'green'}}
            />
            <Button
              containerStyle={{marginTop: 10}}
              title="ยกเลิก"
              onPress={() => navigation.navigate('Restaurant')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default AddReview;
