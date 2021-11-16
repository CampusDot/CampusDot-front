import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabScreen from './Tab';
import SelectedList from 'screens/Main/Home/SelectedList';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name="Tab" component={TabScreen} />
    <MainStack.Screen name="SelectedList" component={SelectedList} />
  </MainStack.Navigator>
);

export default MainStackScreen;
