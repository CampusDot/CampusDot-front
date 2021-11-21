import React from 'react';
import { ScrollView } from 'react-native';
import Challenge from 'components/Main/Challenge';
import RestaurantLists from 'components/Main/RestaurantLists';
import Achivement from 'components/Main/Achivement';
import Header from 'components/Header';

const Home = () => {
  return (
    <ScrollView>
      <Header title="연세대학교" back />
      <Achivement />
      <Challenge />
      <RestaurantLists />
    </ScrollView>
  );
};

export default Home;
