import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectedList from 'screens/Main/Home/SelectedList';
import CreateList from 'screens/Main/Create/CreateList';
import CreateReview from 'screens/Main/Create/CreateReview';
import FriendCollege from 'screens/Main/Home/FriendCollege';
import SearchStoreLists from 'screens/Main/Home/SearchStoreLists';
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
    <MainStack.Screen name="CreateList" component={CreateList} />
    <MainStack.Screen name="CreateReview" component={CreateReview} />
    <MainStack.Screen name="FriendCollege" component={FriendCollege} />
    <MainStack.Screen name="SearchStoreLists" component={SearchStoreLists} />
  </MainStack.Navigator>
);

export default MainStackScreen;
