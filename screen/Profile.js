//profile
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  // Set an initializing state whilst Firebase connects
  const onPress = () => {
    navigation.navigate('MainPage');
  };
  const [initializing, setInitializing] = useState(true);
  const [users, setUsers] = useState();

  // Handle user state changes
  function onAuthStateChanged(users) {
    setUsers(users);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/img/person.png')}
          style={{width: 200, height: 200}}
        />
        <Button mode="outlined" center={<TextInput.Icon icon="Image" />}>
          Icon profile
        </Button>
      </View>
      <View>
        <Text style={styles.messageeContainer}> Welcome </Text>
        <Text style={styles.messageContainer}> {users.email} </Text>
      </View>
      <View style={styles.imageContainer}>
        <Pressable onPress={onPress}>
          <Button mode="outlined" center={<TextInput.Icon icon="Image" />}>
            Home
          </Button>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    width: '50%',
    alignSelf: 'center',
    paddingBottom: 14,
  },
  messageContainer: {
    alignSelf: 'center',
  },
  messageeContainer: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
