import React, { useContext, useCallback, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Challenge from 'components/Home/Challenge';
import RestaurantLists from 'components/Home/RestaurantLists';
import Achivement from 'components/Home/Achivement';
import Header from 'components/Header';
import Friend from 'components/Header/Home/Friend';
import Search from 'components/Header/Home/Search';
import { Context as StoreListContext } from 'context/StoreList';
import { Context as UserContext } from 'context/User';
import { Context as CollegeContext } from 'context/College';
import Divider from 'widgets/Divider';
import FS, { SCALE_HEIGHT } from 'lib/utils/normalize';
import { useFocusEffect } from '@react-navigation/native';
import { MAIN_COLOR } from 'constants/colors';
import { useInfinityScroll } from 'providers/InfinityScroll';

const sortParams = {
  0: 'recent',
  1: 'popular',
};

const Home = () => {
  const { getChallengeLists } = useContext(StoreListContext);
  const { getInformation } = useContext(UserContext);
  const { loading, setLoading, isCloseToBottom } = useInfinityScroll();
  const { state, nextStoreLists } = useContext(CollegeContext);
  const [sort, setSort] = useState(0);

  const getData = async () => {
    if (state.storeLists.length >= 1 && !state.notNextStoreLists) {
      setLoading(true);
      await nextStoreLists({ sort: sortParams[sort], page: state.storeListsPage });
      setLoading(false);
    }
  };

  const onEndReached = () => {
    if (!loading) {
      getData();
    }
  };

  useFocusEffect(
    useCallback(() => {
      getChallengeLists();
    }, []),
  );

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          headerStyle={styles.header}
          title="연세대학교"
          titleStyle={styles.title}
          landings={[<Search />]}
          actions={[<Friend />]}
        />
        <Achivement />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1000}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            onEndReached();
          }
        }}
      >
        <Challenge />
        <Divider />
        <RestaurantLists sort={sort} setSort={setSort} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: FS(20),
    fontWeight: 'bold',
    color: '#000',
  },
  headerContainer: {
    backgroundColor: MAIN_COLOR,
    borderBottomLeftRadius: 14 * SCALE_HEIGHT,
    borderBottomRightRadius: 14 * SCALE_HEIGHT,
  },
  header: {
    backgroundColor: MAIN_COLOR,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      height: 0 * SCALE_HEIGHT,
      width: 0,
    },
    shadowRadius: 0 * SCALE_HEIGHT,
    shadowOpacity: 0,
    elevation: 0,
  },
});

export default Home;
