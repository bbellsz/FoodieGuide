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
const Separator = () => <View style={styles.separator} />;
export default function ReviewPage() {
  const [text, onChangeText] = React.useState('หัวข้อรีวิว ไม่เกิน 100 คำ');
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
    <View style={styles.container1}>
      <View style={styles.top}></View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text> </Text>
            <View>
              <View style={styles.box4}>
                <View style={styles.fixToText}>
                  <Image
                    style={{width: 100, height: 140}}
                    source={require('../assets/img/tootime.jpg')}
                  />
                  <Text style={styles.text1}>
                    TOO TIME
                    {'\n'}
                    <Text
                      style={{
                        color: 'black',
                        paddingLeft: 10,
                        flex: 0.3,
                        fontSize: 14,
                        height: 18,
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('../assets/img/star_filled.png')}
                      />
                      4.9
                    </Text>
                    {/* <Text style={{ color: "#8B8B8B", paddingLeft: 10, flex: 0.3, fontSize: 14, height: 18, }}>     2 รีวิว</Text> */}
                    <Text style={styles.text2}> 2 เรตติ้ง (2 รีวิว)</Text>
                    {'\n'}
                    <Text style={styles.text2}> คาเฟ่, ร้านอาหาร</Text>
                    {'\n'}
                    <Text style={styles.text2}> เปิด อังคาร - อาทิตย์</Text>
                    {'\n'}
                    <Text style={styles.text2}> 10:00 - 21:00</Text>
                  </Text>
                </View>
              </View>
            </View>
            <Text> </Text>
          </View>
          {/* รีวิว*/}
          <View style={styles.box4}>
            <Text style={styles.text4}>เขียนรีวิว</Text>
            <Separator />
            <Text
              style={{
                color: 'black',
                paddingLeft: 0,
                flex: 1,
                fontSize: 16,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              ให้คะแนนร้าน
            </Text>
            <View style={styles.customRatingBarStyles}>
              {maxRating.map((item, key) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
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
            <Text style={styles.text2}>
              {defaultRating + '/' + maxRating.length}
            </Text>
            <Text>{'\n'}</Text>
            <Text
              style={{
                color: '#5F5F5F',
                paddingLeft: 30,
                flex: 1,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              หัวข้อเรื่องรีวิว
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <Text
              style={{
                color: '#5F5F5F',
                paddingLeft: 30,
                flex: 1,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              รายละเอียดรีวิว
            </Text>
            <TextInput
              style={styles.input2}
              onChangeText={onChangeText2}
              value={text2}
            />
            <Text
              style={{
                color: 'black',
                paddingLeft: 30,
                flex: 1,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              เมนูเด็ด
            </Text>
            <Text
              style={{color: 'gray', paddingLeft: 30, flex: 1, fontSize: 15}}>
              รายการอาหารหรือเครื่องดื่มใดก็ได้ ที่ได้รับประทาน และ/หรือ ชื่นชอบ
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText3}
              value={text3}
            />
            <Text
              style={{
                color: 'black',
                paddingLeft: 30,
                flex: 1,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              ราคาต่อหัว
            </Text>
            <Text
              style={{color: 'gray', paddingLeft: 30, flex: 1, fontSize: 15}}>
              รายการอาหารหรือเครื่องดื่มใดก็ได้ ที่ได้รับประทาน และ/หรือ ชื่นชอบ
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText3}
              value={text3}
            />
          </View>
          <Text> </Text>

          {/* รูปภาพ */}
          <View style={styles.box4}>
            <Text style={styles.text4}>รูปภาพ</Text>
            <Separator />
            <View style={styles.fixToText}>
              <View
                style={{
                  borderRadius: 4,
                  backgroundColor: '#D1D1D1',
                  width: 100,
                  height: 100,
                }}
              />
              <View style={{width: 140}}>
                <Button
                  title="Choose File"
                  color="#3DC8FC"
                  onPress={() =>
                    Alert.alert('Button with adjusted color pressed')
                  }
                />
                <Text style={{color: 'gray', flex: 1, fontSize: 15, margin: 5}}>
                  ไฟล์ GIF, JPG หรือ PNG ขนาดต่ำกว่า 1 Mb อ่านต่อได้ที่
                </Text>
              </View>
            </View>
          </View>
          <Text> </Text>

          {/* button */}
          <View style={styles.fixToText}>
            <View style={{width: 140}}>
              <Button
                title="บันทึก"
                color="#f19b38"
                onPress={() =>
                  Alert.alert('Button with adjusted color pressed')
                }
              />
            </View>
            <View style={{width: 140}}>
              <Button
                title="ยกเลิก"
                color="gray"
                onPress={() =>
                  Alert.alert('Button with adjusted color pressed')
                }
              />
            </View>
          </View>
          <Text> </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#696969',
    color: '#696969',
  },
  input2: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#696969',
    color: '#696969',
  },
  scrollView: {
    backgroundColor: '#FEF5E7',
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
    backgroundColor: '#fcf1e8',
  },
  top: {
    flex: 0.12,
    backgroundColor: '#ffcd9b',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 4,
  },
  fixToText2: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  box4: {
    backgroundColor: 'white',
    borderRadius: 10,
  },

  text1: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  text2: {
    //fontWeight: 'bold',
    margin: 5,
    paddingLeft: 20,
    fontSize: 15,
    textAlign: 'left',
    color: '#808B96',
  },
  text3: {
    fontWeight: 'bold',
    margin: 5,
    paddingLeft: 20,
    fontSize: 15,
    textAlign: 'left',
    color: '#f19b38',
  },
  text4: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#f19b38',
  },
  customRatingBarStyles: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
