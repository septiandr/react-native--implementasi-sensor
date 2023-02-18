import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ModalQR = ({navigation, modalVisible, setModalVisible}) => {
  const [scanned, setScanned] = useState(false);

  const handleScan = (event) => {
    if(event.data){
        navigation.navigate('Tab')
    }    
    setScanned(true);
      // Mengirimkan permintaan ke server untuk memverifikasi token QR code
    //   verifyToken(event.data);
  };

//   const verifyToken = (token) => {
//     // Memanggil API untuk memverifikasi token
//     fetch(`https://example.com/api/verifyToken?token=${token}`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.valid) {
//           // Jika token valid, izinkan pengguna untuk masuk ke aplikasi
//           // Anda dapat menyimpan data pengguna di state atau menyimpan token di AsyncStorage
//           console.log("Login berhasil!");
//         } else {
//           // Jika token tidak valid, tampilkan pesan error
//           console.log("QR code tidak valid.");
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

  const handleScanError = (error) => {
    console.log(error);
  };

  const startScan = () => {
    setScanned(false);
    setModalVisible(false)
  };

  return (
    <Modal style={styles.container}
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={startScan}>
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
      <QRCodeScanner
        onRead={handleScan}
        reactivate={true}
        reactivateTimeout={5000}
        showMarker={true}
        markerStyle={styles.marker}
        cameraStyle={styles.camera}
        topContent={
          <Text style={styles.infoText}>Arahkan kamera ke QR code</Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.cancelButton} onPress={startScan}>
            <Text style={styles.buttonText}>Batal</Text>
          </TouchableOpacity>
        }
        cameraProps={{ captureAudio: false }}
        onScanError={handleScanError}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop:-200,
    width:200,
    borderRadius:10,
    alignItems: 'center',
  },
  camera: {
    height: '100%',
  },
  marker: {
    borderColor: '#FFFFFF',
  },
});

export default ModalQR;
