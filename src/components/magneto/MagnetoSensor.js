import { magnetometer } from 'react-native-sensors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { DataSensor } from '../../store/store';

const MagnetoSensor = () => {
  const [magData, setMagData] = useAtom(DataSensor);

  useEffect(() => {
    if(magData.magnetometer.x == 0){
      const subscription = magnetometer.subscribe(({ x, y, z }) => {
        setMagData((prev)=>({
          ...prev,
          magnetometer:{
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
        <Text>Magnetometer Status: </Text>
        <View>
            <Text>x: {magData.magnetometer.x}</Text>
            <Text>y: {magData.magnetometer.y}</Text>
            <Text>z: {magData.magnetometer.z}</Text>
        </View>
    </View>
);
};
const styles = StyleSheet.create({
container: {
    marginBottom:20,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
    width: '80%',
    height: 100,
    paddingLeft: 10,
    paddingTop: 10,
    borderRadius: 10
},
});

export default MagnetoSensor;
