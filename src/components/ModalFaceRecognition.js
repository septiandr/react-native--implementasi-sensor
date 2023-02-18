import { View, Modal, StyleSheet, Text, Alert } from "react-native"
import React, { useState, useRef, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import { FaceDetector } from 'react-native-face-detector';

function ModalFaceRecognition({modalVisibleFace , setModalVisibleFace, navigation}) {

    const cameraRef = useRef(null);
    const [faceDetected, setFaceDetected] = useState(false);
  
    function onFacesDetected({ faces }) {
      if (faces.length > 0) {
        setFaceDetected(true);
      } else {
        setFaceDetected(false);
      }
    }

    useEffect(()=>{
        if(faceDetected){
            navigation.navigate('Tab')
        }
    },[faceDetected])

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFace}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisibleFace(!modalVisibleFace);
          }}
    >
        <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
            onFacesDetected={onFacesDetected}
            faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
            faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
            faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
      />
      {faceDetected ? (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Face Detected</Text>
        </View>
      ) : null}

    </Modal>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    overlayText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default ModalFaceRecognition