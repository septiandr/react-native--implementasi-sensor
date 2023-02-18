import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { accelerometer } from 'react-native-sensors';
import { useAtom } from "jotai";
import { DataSensor } from '../../store/store';

export default function SensorAcelero() {
  const [acceleration, setAcceleration] = useAtom(DataSensor);

  useEffect(() => {
    if(acceleration.accelerometer.x == 0){
      const subscription = accelerometer.subscribe(({ x, y, z }) => {
        setAcceleration((prev)=>({
          ...prev,
          accelerometer:{
            x:x,
            y:y,
            z:z
          }
        }));
      });
  
      setTimeout(() => {
          subscription.unsubscribe();
        }, 2000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Accelerometer Status:</Text>
      <View>
        <Text>X: {acceleration.accelerometer.x.toFixed(2)}</Text>
        <Text>Y: {acceleration.accelerometer.y.toFixed(2)}</Text>
        <Text>Z: {acceleration.accelerometer.z.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    backgroundColor: '#F5FCFF',
    width:'80%',
    height:100,
    paddingLeft:10,
    paddingTop:10,
    borderRadius:10
  },
});
