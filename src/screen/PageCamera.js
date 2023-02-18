import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Geolocation from 'react-native-geolocation-service';
import { magnetometer } from 'react-native-sensors';

const CameraScreen = () => {
  const [location, setLocation] = useState(null);
  const [magneto, setMagneto] = useState(null);
  const [picture, setPicture] = useState(null);
  const magnetometerRef = useRef();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    magnetometerRef.current = magnetometer;
    const subscription = magnetometerRef.current.subscribe((magneto) => {
      setMagneto(magneto);
    });
    return () => subscription.unsubscribe();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const datetime = new Date().toISOString();
      const { latitude, longitude } = location.coords;
      const { x, y, z } = magneto;
      console.log(`Picture taken at ${datetime} with location (${latitude}, ${longitude}) and magnetometer reading (${x}, ${y}, ${z})`);
      setPicture(data.uri);
    }
  };

  const cameraRef = useRef(null);

  return (
    <View style={styles.container}>
      {picture && <Image source={{ uri: picture }} style={styles.preview} />}
      {!picture && (
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
      )}
      <View style={styles.buttonContainer}>
        {!picture && (
          <TouchableOpacity onPress={takePicture} style={styles.capture}>
            <Text style={styles.captureText}>CAPTURE</Text>
          </TouchableOpacity>
        )}
        {picture && (
          <TouchableOpacity onPress={() => setPicture(null)} style={styles.capture}>
            <Text style={styles.captureText}>RETAKE</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  captureText: {
    color: '#000',
    fontSize: 14,
  },
});

export default CameraScreen;
