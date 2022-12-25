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
import React, {useState} from 'react';
import appStyles from '../assets/styles/appStyles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const Separator = () => <View style={styles.separator} />;
export default function ReviewPage() {
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

  return (
    <View style={appStyles.containerMain}>
      <View style={appStyles.headerMain}>
        <View style={appStyles.fixMainHeader}>
          <Text style={appStyles.txtAppName}>FOODIE GUIDE</Text>
        </View>
      </View>

      <SafeAreaView style={appStyles.container}>
        <ScrollView style={appStyles.scrollView}>
          <View>
            <View style={appStyles.mainPageBox}>
              <View style={appStyles.fixToText}>
                <Image
                  style={appStyles.imgWriteReview}
                  source={require('../assets/img/tootime.jpg')}
                />
                <Text style={appStyles.restaurantTxtName2}>TOO TIME{'\n'}</Text>
                <Text style={appStyles.restaurantInfo2}>
                  <Image
                    style={appStyles.iconSize}
                    source={require('../assets/img/star_filled.png')}
                  />
                  4.9 2 เรตติ้ง (2 รีวิว)
                  {'\n'} คาเฟ่, ร้านอาหาร
                  {'\n'} เปิด อังคาร - อาทิตย์
                  {'\n'} 10:00 - 21:00
                </Text>
              </View>
            </View>
          </View>
          <Text> </Text>
          {/* รีวิว*/}
          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantTxtName3}>เขียนรีวิว</Text>
            <Text style={appStyles.restaurantTxtName2}>ให้คะแนนร้าน</Text>
            <View style={styles.customRatingBarStyles}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.75}
                    key={item}
                    onPress={() => setdefaultRating(item)}>
                    <Image
                      style={styles.starImgStyle}
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
            <Text style={appStyles.restaurantInfo3}>หัวข้อเรื่องรีวิว</Text>
            <TextInput
              style={appStyles.input}
              placeholder="หัวข้อรีวิว ไม่เกิน 100 คำ"
              value={text}
            />
            <Text style={appStyles.restaurantInfo3}>รายละเอียดรีวิว</Text>
            <TextInput
              style={appStyles.input2}
              placeholder="รายละเอียดรีวิว"
              value={text2}
            />
            <Text style={appStyles.restaurantInfo3}>เมนูเด็ด</Text>
            <TextInput
              style={appStyles.input}
              placeholder="รายการอาหารหรือเครื่องดื่มใดก็ได้ ที่ได้รับประทาน หรือ ชื่นชอบ"
              value={text3}
            />
            <Text style={appStyles.restaurantInfo3}>ราคาต่อหัว</Text>
            <TextInput
              style={appStyles.input}
              placeholder="ราคาอาหารเฉลี่ยต่อหัว"
              value={text3}
            />
          </View>
          <Text> </Text>

          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantTxtName3}>รูปภาพ</Text>
            <Separator />
            <View style={styles.fixToText}>
              <View style={appStyles.inputImg} />
              <View style={{width: 140}}>
                <Pressable
                  style={appStyles.btnImgPress}
                  onPress={() => Alert.alert('Choose')}>
                  <Text style={appStyles.txtBtnPress}>Choose File</Text>
                </Pressable>
                <Text style={appStyles.restaurantInfo}>
                  {'\n'}ไฟล์ GIF, JPG หรือ PNG ขนาดต่ำกว่า 1 Mb อ่านต่อได้ที่
                </Text>
              </View>
            </View>
          </View>
          <View style={appStyles.fixToText}>
            <Pressable
              style={appStyles.btnSavePress}
              onPress={() => Alert.alert('Save')}>
              <Text style={appStyles.txtBtnPress}>บันทึก</Text>
            </Pressable>
            <Pressable
              style={appStyles.btnCanclePress}
              onPress={() => Alert.alert('Cancle')}>
              <Text style={appStyles.txtBtnPress}>ยกเลิก</Text>
            </Pressable>
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
