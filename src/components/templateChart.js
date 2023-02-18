import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Text } from 'react-native-svg';

const BarGraph = ({ data, width, height, chartConfig, title }) => {
  return (
    <View >
    <Text>{title}</Text>
      <BarChart
        data={data}
        width={width}
        height={height}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BarGraph;
