import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import appStyles from '../assets/styles/appStyles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import firestore from '@react-native-firebase/firestore';
const Separator = () => <View style={appStyles.separator} />;

export default function ReviewPage(route) {
  const [text, onChangeText] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const starImgFilled =
    'https://raw.githubusercontent.com/bbellsz/Help/master/assets/img/star_filled.png?token=GHSAT0AAAAAAB22BAZYKCD6QO3QV4AKMD22Y5FU7KA';
  const starImgCorner =
    'https://raw.githubusercontent.com/bbellsz/Help/master/assets/img/star_corner.png?token=GHSAT0AAAAAAB22BAZY2DSQLF6J7RN4HO2GY5FU6YQ';
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [day, setDay] = useState([]);

  useEffect(() => {
    firestore()
      .collection('restaurant')
      // .where('name', '==', route.params.name)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setName(documentSnapshot.data().name);
          setImage(documentSnapshot.data().image);
          setDay(documentSnapshot.data().day);
        });
      });
  }, []);
  return (
    <View style={appStyles.containerMain}>
      {/* <View style={appStyles.headerMain}>
        <View style={appStyles.fixMainHeader}>
          <Text style={appStyles.txtAppName}>FOODIE GUIDE</Text>
        </View>
      </View> */}

      <SafeAreaView style={appStyles.container}>
        <ScrollView style={appStyles.scrollView}>
          <View>
            <View style={appStyles.mainPageBox}>
              <View style={appStyles.fixToText3}>
                {/* <Image style={appStyles.imgWriteReview} source={{uri: image}} /> */}
                <View>
                  <Text style={appStyles.txtWriteReview}>{name}</Text>
                  <Text style={appStyles.restaurantInfo4}>
                    <Image
                      style={appStyles.iconSize}
                      source={require('../assets/img/star_filled.png')}
                    />
                    4.9 2 ????????????????????? (2 ???????????????)
                    {'\n'} ???????????????, ???????????????????????????
                    {'\n'} ?????????????????????: {day}
                    {'\n'} 10:00 - 21:00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text> </Text>
          {/* ???????????????*/}
          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantTxtName3}>??????????????????????????????</Text>
            <Separator />
            <Text style={appStyles.restaurantTxtName2}>????????????????????????????????????</Text>
            <View style={appStyles.customRatingBarStyles}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.75}
                    key={item}
                    onPress={() => setdefaultRating(item)}>
                    <Image
                      style={appStyles.starImgStyle}
                      source={
                        item <= defaultRating
                          ? {uri: starImgFilled}
                          : {uri: starImgCorner}
                      }
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={appStyles.restaurantInfo}>
              {defaultRating + '/' + maxRating.length}
            </Text>
            <Text>{'\n'}</Text>
            <Text style={appStyles.restaurantInfo3}>???????????????????????????????????????????????????</Text>
            <TextInput
              style={appStyles.input}
              placeholder="????????????????????????????????? ????????????????????? 100 ??????"
              value={text}
            />
            <Text style={appStyles.restaurantInfo3}>?????????????????????????????????????????????</Text>
            <TextInput
              style={appStyles.input2}
              placeholder="?????????????????????????????????????????????"
              value={text2}
            />
            <Text style={appStyles.restaurantInfo3}>????????????????????????</Text>
            <TextInput
              style={appStyles.input}
              placeholder="??????????????????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????? ???????????? ?????????????????????"
              value={text3}
            />
          </View>
          <Text> </Text>

          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantTxtName3}>??????????????????</Text>
            <Separator />
            <View style={appStyles.fixToText}>
              <View style={appStyles.inputImg} />
              <View style={{width: 140}}>
                <Pressable
                  style={appStyles.btnImgPress}
                  onPress={() => Alert.alert('Choose')}>
                  <Text style={appStyles.txtBtnPress}>Choose File</Text>
                </Pressable>
                <Text style={appStyles.restaurantInfo}>
                  {'\n'}???????????? GIF, JPG ???????????? PNG ????????????????????????????????? 1 Mb ???????????????????????????????????????
                </Text>
              </View>
            </View>
          </View>
          <View style={appStyles.fixToText}>
            <Pressable
              style={appStyles.btnSavePress}
              onPress={() => Alert.alert('Save')}>
              <Text style={appStyles.txtBtnPress}>??????????????????</Text>
            </Pressable>
            <Pressable
              style={appStyles.btnCanclePress}
              onPress={() => Alert.alert('Cancle')}>
              <Text style={appStyles.txtBtnPress}>??????????????????</Text>
            </Pressable>
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
