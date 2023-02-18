import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useAtom } from 'jotai';
import { DataSensor } from '../store/store';
import BarGraph from '../components/templateChart';
import MapScreen from '../components/maps';


const PageC = () => {
  const [sensor] = useAtom(DataSensor)

  const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
      marginTop: 50
    },
  };

  const dataAcelero = {
    labels: ['X', 'Y', 'Z'],
    datasets: [
      {
        data: Object.values(sensor.accelerometer),
      },
    ],
  };
  const dataGyro = {
    labels: ['X', 'Y', 'Z'],
    datasets: [
      {
        data: Object.values(sensor.gyroscope),
      },
    ],
  };
  const dataMagneto = {
    labels: ['X', 'Y', 'Z'],
    datasets: [
      {
        data: Object.values(sensor.magnetometer),
      },
    ],
  };


  return (
    <ScrollView >
      <View style ={{display:'flex', justifyContent:'center', alignItems:'center'}}>

      <View style={{ marginTop: 30,  }}>
        <Text style ={{textAlign:'center'}}>Grafik Accelerometer</Text>
        <BarGraph
          title={"grafik Aceelerometer"}
          chartConfig={chartConfig}
          data={dataAcelero}
          width={300}
          height={220}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style ={{textAlign:'center'}}>Grafik Gyroscope</Text>
        <BarGraph
          title={"grafik Gyroscope"}
          chartConfig={chartConfig}
          data={dataGyro}
          width={300}
          height={220}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style ={{textAlign:'center'}}>Grafik Magnetometer</Text>
        <BarGraph
          title={"grafik Magnetometer"}
          chartConfig={chartConfig}
          data={dataMagneto}
          width={300}
          height={220}
        />
      </View>
      {/* <MapScreen/> */}
      </View>
    </ScrollView>
  );
};


export default PageC;
