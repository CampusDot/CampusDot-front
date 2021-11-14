import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'screens/Main/Main';

const Tab = createBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Main" component={Main} />
  </Tab.Navigator>
);

export default TabScreen;
