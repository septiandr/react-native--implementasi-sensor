import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/Home';
import PageB from '../screen/PageB';
import CameraScreen from '../screen/PageCamera';
import PageC from '../screen/PageC';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Page A" component={HomePage} />
        <Tab.Screen name="Page B" component={PageB} />
        <Tab.Screen name="Page C" component={PageC} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </Tab.Navigator>
  );
}