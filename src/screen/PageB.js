import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import DataSoc from '../components/dataSoc/dataSoc';

const PageB= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Page B</Text>
      <DataSoc/>
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

export default PageB;
