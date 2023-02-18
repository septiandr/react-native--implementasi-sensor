import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const BatteryLevel = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      try {
        const level = await DeviceInfo.getBatteryLevel();
        setBatteryLevel(Math.round(level * 100));
      } catch (err) {
        console.warn(err);
      }
    };
    getBatteryLevel();
  }, []);

  return (
    <View>

      {batteryLevel ? (
        <Text style={{ fontSize: 18 }}>Battery level: {batteryLevel}%</Text>
      ) : (
        <Text style={{ fontSize: 18 }}>Loading battery level...</Text>
      )}
    </View>
  );
};

export default BatteryLevel;
