import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
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

const Restaurant = ({navigation, route}) => {
  const onPress = () => {
    navigation.navigate('AddReview');
  };
  const [name, setName] = useState([]);
  const [image, setImage] = useState([]);
  const [day, setDay] = useState([]);
  const [description, setDescription] = useState([]);
  const [address, setAddress] = useState([]);
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    firestore()
      .collection('restaurant')
      .where('name', '==', route.params.name)
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setName(documentSnapshot.data().name);
          setImage(documentSnapshot.data().image);
          setDay(documentSnapshot.data().day);
          setDescription(documentSnapshot.data().description);
          setAddress(documentSnapshot.data().address);
          setPhone(documentSnapshot.data().phone);
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
          {/* //          <Image style={appStyles.restaurantDetailImg} source={{uri: image}} /> */}
          <View style={appStyles.container}>
            <View>
              <View style={appStyles.mainPageBox}>
                <Text style={appStyles.restaurantTxtName}>
                  {name}
                  {'\n'}
                  <Text style={appStyles.restaurantInfo}>
                    <Image
                      style={appStyles.iconSize}
                      source={require('../assets/img/star_filled.png')}
                    />
                    4.9 2 รีวิว
                    {'\n'}
                    {description}
                  </Text>
                </Text>
                <View style={appStyles.fixToText}>
                  <View style={appStyles.restaurantReviewBox}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('AddReview', {
                          name: name,
                        })
                      }>
                      <Text style={appStyles.restaurantInfoWhite}>
                        <Image
                          style={appStyles.iconSize}
                          source={require('../assets/img/pencil.png')}
                        />
                        {' เขียนรีวิว'}
                      </Text>
                    </Pressable>
                  </View>

                  <View style={appStyles.iconBox}>
                    <Pressable
                      onPress={() => Alert.alert('Left button pressed')}>
                      <Image
                        style={appStyles.iconSize}
                        source={require('../assets/img/bookmark.png')}
                      />
                    </Pressable>
                  </View>

                  <View style={appStyles.iconBox}>
                    <Pressable
                      onPress={() => Alert.alert('Left button pressed')}>
                      <Image
                        style={appStyles.iconSize}
                        source={require('../assets/img/share.png')}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <Text> </Text>
          </View>

          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantInfoDetailHead}>
              {'\n'}
              เวลาเปิด :
              <Text style={appStyles.restaurantInfoDetail}> {day}</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              ที่ตั้ง :
              <Text style={appStyles.restaurantInfoDetail}> {address}</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              เบอร์โทร :
              <Text style={appStyles.restaurantInfoDetail}> {phone}</Text>
              {'\n'}
            </Text>
          </View>
          <Text> </Text>
          <View style={appStyles.mainPageBox}>
            <Text style={appStyles.restaurantInfoDetail}>
              {'\n'}2 รีวิว
              <Text> 2 เรตติ้ง</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              4.9
              <Text> </Text>
              <Text style={appStyles.restaurantInfoDetail}>จาก 5</Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetail}>
              <Pressable onPress={() => Alert.alert('Left button pressed')}>
                <Text style={appStyles.restaurantInfoDetail}>
                  ยอดนิยม{'  '}
                </Text>
              </Pressable>
              <Image
                style={appStyles.iconSize}
                source={require('../assets/img/caretdown.png')}
              />
            </Text>
            <View>
              <View style={appStyles.fixToText}>
                <Image
                  style={appStyles.iconProfile}
                  source={require('../assets/img/person.png')}
                />
                <Text style={appStyles.txtNameProfile}>Sirada Boonchuay</Text>
              </View>

              <View style={appStyles.fixToText2}>
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Text style={appStyles.dateReview}>1 พ.ย. 2022</Text>
              </View>
              <Text style={appStyles.txtReview}>อร่อยมาก บริการดี</Text>
              <Text style={appStyles.txtReview2}>
                ราคาต่อหัว : 100-150 {'\n'}
                เมนูเด็ด : ปลากระพงทอดน้ำปลา {'\n'}
                {'   '}ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน
                ข้าวไก่ทอดสมุนไพร ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาติดี...คุ้ม...
              </Text>
              {/* <View style={appStyles.fixToText}>
                <View style={appStyles.box}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    1 Like
                  </Text>
                </View>
                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    0 comment
                  </Text>
                </View>

                <View style={styles.box4}>
                  <Text
                    style={{
                      color: 'black',
                      margin: 7,
                      flex: 1,
                      fontSize: 15,
                      fontWeight: 'bold',
                      paddingLeft: 10,
                    }}
                    onPress={() => Alert.alert('Left button pressed')}>
                    share
                  </Text>
                </View>
              </View> */}
              <Separator />
            </View>

            <View>
              <View style={appStyles.fixToText}>
                <Image
                  style={appStyles.iconProfile}
                  source={require('../assets/img/person.png')}
                />
                <Text style={appStyles.txtNameProfile}>Amonnat Kaewnok</Text>
              </View>

              <View style={appStyles.fixToText2}>
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={appStyles.iconSize}
                  source={require('../assets/img/star_filled.png')}
                />
                <Text style={appStyles.dateReview}>1 พ.ย. 2022</Text>
              </View>
              <Text style={appStyles.txtReview}>อร่อยมาก บริการดี</Text>
              <Text style={appStyles.txtReview2}>
                ราคาต่อหัว : 100-150 {'\n'}
                เมนูเด็ด : ปลากระพงทอดน้ำปลา {'\n'}
                {'   '}ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน
                ข้าวไก่ทอดสมุนไพร ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาติดี...คุ้ม...
              </Text>
            </View>
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Restaurant;
