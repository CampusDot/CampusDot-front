import React, { useContext, useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Challenge from 'components/Home/Challenge';
import RestaurantLists from 'components/Home/RestaurantLists';
import Achivement from 'components/Home/Achivement';
import Header from 'components/Header';
import Friend from 'components/Header/Home/Friend';
import Search from 'components/Header/Home/Search';
import { Context as CollegeContext } from 'context/College';
import { Context as StoreListContext } from 'context/StoreList';
import Divider from 'widgets/Divider';
import Icon from 'widgets/Icon';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const { getStoreLists } = useContext(CollegeContext);
  const { getChallengeLists } = useContext(StoreListContext);

  useFocusEffect(
    useCallback(() => {
      getStoreLists({ page: 0 });
      getChallengeLists();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header
        title="연세대학교"
        titleStyle={styles.title}
        landings={[<Icon source={require('public/icons/logo.png')} style={styles.logo} />]}
        actions={[<Search />, <Friend />]}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Achivement />
        <Challenge />
        <Divider />
        <RestaurantLists />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: FS(20),
    fontWeight: 'bold',
  },
  logo: {
    width: 35 * SCALE_WIDTH,
    height: 17 * SCALE_HEIGHT,
  },
});

export default Home;
