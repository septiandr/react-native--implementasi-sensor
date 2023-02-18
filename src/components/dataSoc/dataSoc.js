import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DataSoc = () => {
  const [manufacturer, setManufacturer] = useState('');
  const model = DeviceInfo.getModel();
  const build = DeviceInfo.getBuildNumber();
  const sdk = DeviceInfo.getSystemVersion();
  const versionCode = DeviceInfo.getVersion();

  useEffect(() => {
    DeviceInfo.getManufacturer().then((manufacturer) => {
      setManufacturer(manufacturer);
    });

  }, []);

  return (
    <View>
      <Text>Manufacturer: {manufacturer}</Text>
      <Text>Model: {model}</Text>
      <Text>Build Number: {build}</Text>
      <Text>SDK Version: {sdk}</Text>
      <Text>Version Code: {versionCode}</Text>
    </View>
  );
};

export default DataSoc;
