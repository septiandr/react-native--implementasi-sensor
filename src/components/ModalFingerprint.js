import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';


const ModalFingerprint = ({ visible = false, setVisible = () => { } , navigation}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [biometryType, setBiometryType] = useState()
    
    useEffect(() => {
        if(visible){
            FingerprintScanner
            .isSensorAvailable()
            .then(biometryType => setBiometryType({ biometryType }))
            .catch(error => setErrorMessage(error.message ));
        }
      }, [visible]);

      useEffect(()=>{
        if(biometryType){
            authenticateUser()
        }
      },[biometryType])
    
      const authenticateUser = () => {
        FingerprintScanner
          .authenticate({ title: 'Log in with Fingerprint' })
          .then((val) => {
            navigation.navigate('Tab')
            FingerprintScanner.release();
            setVisible(false)
          })
          .catch((error) => {
            console.log('Authentication failed', error);
            setVisible(false)
          });
      };
    


    return (
        <View>
        </View>
    );
};
export default ModalFingerprint;