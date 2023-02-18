import { gyroscope } from 'react-native-sensors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtom } from 'jotai';
import { DataSensor } from '../../store/store';

const SensorGyro = () => {
    const [gyroData, setGyroData] = useAtom(DataSensor);

    useEffect(() => {
        if(gyroData.gyroscope.x == 0){
            const subscription = gyroscope.subscribe(({ x, y, z }) => {
                setGyroData((prev)=>({
                    ...prev,
                    gyroscope:{
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
            <Text>Gyroscope Status: </Text>
            <View>
                <Text>x: {gyroData.gyroscope.x}</Text>
                <Text>y: {gyroData.gyroscope.y}</Text>
                <Text>z: {gyroData.gyroscope.z}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#F5FCFF',
        width: '80%',
        height: 100,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 10
    },
});
export default SensorGyro;
