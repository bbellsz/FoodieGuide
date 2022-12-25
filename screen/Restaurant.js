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
} from 'react-native';
import React from 'react';
import appStyles from '../assets/styles/appStyles';
const Separator = () => <View style={styles.separator} />;
// const Restaurant = ({navigation}) => {
//   const onPress = () => {
//     navigation.navigate('ReviewPage');
//   };

const Restaurant = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('ReviewPage');
  };
  return (
    <View style={appStyles.containerMain}>
      <View style={appStyles.headerMain}>
        <View style={appStyles.fixMainHeader}>
          <Text style={appStyles.txtAppName}>FOODIE GUIDE</Text>
        </View>
      </View>

      <SafeAreaView style={appStyles.container}>
        <ScrollView style={appStyles.scrollView}>
          <Image
            style={appStyles.restaurantDetailImg}
            source={require('../assets/img/tootime.jpg')}
          />
          <View style={appStyles.container}>
            <View>
              <View style={appStyles.mainPageBox}>
                <Text style={appStyles.restaurantTxtName}>
                  TOO TIME
                  {'\n'}
                  <Text style={appStyles.restaurantInfo}>
                    <Image
                      style={appStyles.iconSize}
                      source={require('../assets/img/star_filled.png')}
                    />
                    4.9 2 รีวิว
                    {'\n'}คาเฟ่, ร้านอาหาร
                  </Text>
                </Text>
                <View style={appStyles.fixToText}>
                  <View style={appStyles.restaurantReviewBox}>
                    <Pressable onPress={onPress}>
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
              <Text style={appStyles.restaurantInfoDetail}>
                {' '}
                อังคาร - อาทิตย์ 10:00 - 21:00
              </Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              ที่ตั้ง :
              <Text style={appStyles.restaurantInfoDetail}>
                {' '}
                213/16 หมู่ 3 นครศรีธรรมราช
              </Text>
            </Text>
            <Text style={appStyles.restaurantInfoDetailHead}>
              เบอร์โทร :
              <Text style={appStyles.restaurantInfoDetail}>
                {' '}
                084-6983273, 086-9449317
              </Text>
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
                <Text
                  style={{
                    color: 'black',
                    margin: 5,
                    flex: 1,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Sirada Boonchuay
                  {'\n'}
                  <Text
                    style={{
                      color: 'green',
                      paddingLeft: 0,
                      flex: 1,
                      fontSize: 11,
                    }}>
                    ยืนยันตัวตนแล้ว
                  </Text>
                </Text>
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
              <Text
                style={{
                  color: 'black',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingLeft: 50,
                }}>
                อร่อยมาก บริการดี
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                ราคาต่อหัว : 100-150
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                เมนูเด็ด : ปลากระพงทอดน้ำปลา
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                }}>
                ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน ข้าวไก่ทอดสมุนไพร
                ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาดี...คุ้ม...
              </Text>
              <View style={styles.fixToText}>
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
              </View>
              <Separator />
            </View>

            <View>
              <View style={styles.fixToText}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../assets/img/person.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    margin: 5,
                    flex: 1,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  Amonnat Kaewnok
                  {'\n'}
                  <Text
                    style={{
                      color: 'green',
                      paddingLeft: 0,
                      flex: 1,
                      fontSize: 11,
                    }}>
                    ยืนยันตัวตนแล้ว
                  </Text>
                </Text>
              </View>

              <View style={styles.fixToText2}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/star_filled.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/star_filled.png')}
                />
                <Text
                  style={{
                    color: 'gray',
                    margin: 5,
                    flex: 0,
                    fontSize: 13,
                    paddingLeft: 1,
                  }}>
                  1 พ.ย. 2022
                </Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  fontWeight: 'bold',
                  paddingLeft: 50,
                }}>
                อร่อยมาก บริการดี
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                ราคาต่อหัว : 100-150
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                  fontWeight: 'bold',
                }}>
                เมนูเด็ด : ปลากระพงทอดน้ำปลา
              </Text>
              <Text
                style={{
                  color: 'gray',
                  margin: 5,
                  flex: 1,
                  fontSize: 16,
                  paddingLeft: 50,
                }}>
                ร้านอยู่หน้า ม วลัยลัก สั่งกับข้าวสามจาน ข้าวไก่ทอดสมุนไพร
                ข้าวคั่วกลิ้งเนื้อ กระเพราทะเล โรตีกรอบสองจาน
                ราดฝอยทองกะราดโอวัลติน อิตาเลี่ยนโซดาสองแก้ว เบ็ดเสร็จประมาณ 200
                บ้าน นั่งห้องแอร์ บริการดี รสชาดี...คุ้ม...
              </Text>
              <View style={styles.fixToText}>
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
              </View>
            </View>
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  top: {
    flex: 0.12,
    backgroundColor: '#ffcd9b',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  scrollView: {
    backgroundColor: '#FEF5E7',
    marginHorizontal: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  box3: {
    flex: 0.5,
    //backgroundColor: "#F08080",
    borderRadius: 10,
    backgroundColor: '#F08080',
    width: 200,
    height: 40,
    justifyContent: 'space-around',
  },
  box4: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  box5: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#D0D0D0',
    //width: 100,
    height: 40,
    // justifyContent: 'center',
  },
  text1: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#f19b38',
  },
  Icon1: {
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 5,
  },
  text4: {
    margin: 2,
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Restaurant;
