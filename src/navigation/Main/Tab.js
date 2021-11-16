import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screens/Main/Home';
import Stamp from 'screens/Main/Stamp';
import Notice from 'screens/Main/Notice';
import MyPage from 'screens/Main/MyPage';
import Create from 'screens/Main/Create';

const Tab = createBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Stamp" component={Stamp} />
    <Tab.Screen name="Create" component={Create} />
    <Tab.Screen name="Notice" component={Notice} />
    <Tab.Screen name="MyPage" component={MyPage} />
  </Tab.Navigator>
);

export default TabScreen;
