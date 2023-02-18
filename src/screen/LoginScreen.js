import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import ModalFingerprint from '../components/ModalFingerprint';
import ModalFaceRecognition from '../components/ModalFaceRecognition';
import ModalQR from '../components/ModalQR';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleFR, setModalVisibleFR] = useState(false);
  const [modalVisibleQR, setModalVisibleQR] = useState(false);


  const handleLogin = () => {
    if(username && password){
      navigation.navigate('Tab')
    }else{
      Alert.alert('you must fill the form')
    }
  };

  const handleFingerprintLogin = () => {
    setModalVisible(true)
    // Logic untuk memproses fingerprint login
  };

  const handleFaceLogin = () => {
    setModalVisibleFR(true)
    // Logic untuk memproses face recognition login
  };

  const handleQRLogin = () => {
    setModalVisibleQR(true)
    // Logic untuk memproses QR login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleFingerprintLogin}>
        <Text style={styles.buttonText}>Fingerprint Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleFaceLogin}>
        <Text style={styles.buttonText}>Face Recognition Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleQRLogin}>
        <Text style={styles.buttonText}>QR Login</Text>
      </TouchableOpacity>
      <ModalFingerprint visible ={modalVisible} setVisible={(e) => setModalVisible(e) } navigation={navigation}/>
      <ModalFaceRecognition modalVisibleFace={modalVisibleFR} setModalVisibleFace ={(e)=> setModalVisibleFR(e)} navigation={navigation}/>
      <ModalQR modalVisible={modalVisibleQR} setModalVisible ={(e)=> setModalVisibleQR(e)} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 16,
    borderRadius:10

  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    marginVertical: 8,
    borderRadius:10,
    width:'50%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius:10,
    textAlign:'center'

  },
});

export default LoginScreen;
