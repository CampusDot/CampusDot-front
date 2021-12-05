import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectedList from 'screens/Main/Home/SelectedList';
import CreateReview from 'screens/Main/Create/CreateReview';
import SelectedSection from 'screens/Main/MyPage/SelectedSection';
import SelectedStore from 'screens/Main/Home/SelectedStore';
import SearchStore from 'screens/Main/Create/SearchStore';
import TabScreen from './Tab';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name="Tab" component={TabScreen} />
    <MainStack.Screen name="SelectedList" component={SelectedList} />
    <MainStack.Screen name="CreateReview" component={CreateReview} />
    <MainStack.Screen name="SelectedSection" component={SelectedSection} />
    <MainStack.Screen name="SelectedStore" component={SelectedStore} />
    <MainStack.Screen name="SearchStore" component={SearchStore} />
  </MainStack.Navigator>
);

export default MainStackScreen;
