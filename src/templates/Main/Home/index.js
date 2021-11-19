import React from 'react';
import { ScrollView } from 'react-native';
import Challenge from 'components/Main/Challenge';
import RestaurantLists from 'components/Main/RestaurantLists';
import Achivement from 'components/Main/Achivement';

const Home = () => {
  return (
    <ScrollView>
      <Achivement />
      <Challenge />
      <RestaurantLists />
    </ScrollView>
  );
};
export default Home;
