import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import DateTime from '../components/dateTime/DateTime';
import SensorAcelero from '../components/accelero/SensorAcelero';
import SensorGyro from '../components/gyro/SensorGyro';
import MagnetoSensor from '../components/magneto/MagnetoSensor';
import GeoSensor from '../components/geoLocation/geoLocation';
import BatteryLevel from '../components/batteryLevel/batteryLevel';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Page A</Text>
      <DateTime/>
      <BatteryLevel/>
      <SensorAcelero/>
      <SensorGyro/>
      <MagnetoSensor/>
      <GeoSensor/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomePage;
