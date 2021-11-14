import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './Tab';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name="Tab" component={TabScreen} />
  </MainStack.Navigator>
);

export default MainStackScreen;
