import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Challenge from 'components/Main/Challenge';
import RestaurantLists from 'components/Main/RestaurantLists';
import Achivement from 'components/Main/Achivement';
import Header from 'components/Header';
import Friend from 'components/Header/Home/Friend';
import Search from 'components/Header/Home/Search';
import { Context as CollegeContext } from 'context/College';
import { Context as StoreListContext } from 'context/StoreList';

const Home = () => {
  const { getStoreLists } = useContext(CollegeContext);
  const { getChallengeLists } = useContext(StoreListContext);

  useEffect(() => {
    getStoreLists({ page: 0 });
    getChallengeLists();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <Header title="연세대학교" landings={<Search />} actions={<Friend />} />
      <Achivement />
      <Challenge />
      <RestaurantLists />
    </ScrollView>
  );
};

export default Home;
