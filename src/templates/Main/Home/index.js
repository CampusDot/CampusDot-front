import React from 'react';
import { ScrollView } from 'react-native';
import Challenge from 'components/Main/Challenge';
import RestaurantLists from 'components/Main/RestaurantLists';

const Home = () => {
  return (
    <ScrollView>
      <Challenge />
      <RestaurantLists />
    </ScrollView>
  );
};
export default Home;
