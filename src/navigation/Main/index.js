import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectedList from 'screens/Main/Home/SelectedList';
import CreateList from 'screens/Main/Create/CreateList';
import CreateReview from 'screens/Main/Create/CreateReview';
import FriendCollege from 'screens/Main/Home/FriendCollege';
import SearchStoreLists from 'screens/Main/Home/SearchStoreLists';
import SelectedSection from 'screens/Main/MyPage/SelectedSection';
import CreateModal from 'components/Main/CreateModal';
import ChallengeStore from 'screens/Main/Create/ChallengeStore';
import SelectedStore from 'screens/Main/Home/SelectedStore';
import Coupon from 'screens/Main/Stamp/Coupon';
import Ranking from 'screens/Main/Stamp/Ranking';
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
    <MainStack.Screen name="SelectedSection" component={SelectedSection} />
    <MainStack.Screen name="ChallengeStore" component={ChallengeStore} />
    <MainStack.Screen name="SelectedStore" component={SelectedStore} />
    <MainStack.Screen name="Coupon" component={Coupon} />
    <MainStack.Screen name="Ranking" component={Ranking} />
    <MainStack.Screen
      name="CreatePosts"
      component={CreateModal}
      options={{
        presentation: 'transparentModal',
      }}
    />
  </MainStack.Navigator>
);

export default MainStackScreen;
