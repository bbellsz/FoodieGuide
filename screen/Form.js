import {StyleSheet, Text, View, TextInput, useState} from 'react-native';

export default function Form() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text>Firebase crud!</Text>
      <TextInput
        value={username}
        onChangeText={username => {
          setName(username);
        }}
        placeholder="Username"
        style={styles.textBoxes}></TextInput>
      <TextInput
        value={email}
        onChangeText={email => {
          setEmail(email);
        }}
        placeholder="Email"
        style={styles.textBoxes}></TextInput>
      <button onClick={deleteData}>Submit Data </button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%',
    fontSize: 18,
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
