import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useAtom } from 'jotai';
import { DataSensor } from '../store/store';

const MapScreen = () => {
    const [sensor] = useAtom(DataSensor)
  const latitude = sensor.gps.latitute;
  const longitude = sensor.gps.longitude;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title="Lokasi saya"
          description="Ini adalah lokasi saya"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
