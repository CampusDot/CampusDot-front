import React, { useContext, useCallback, useState, FlatList, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from 'components/Header';
import { Context as UserContext } from 'context/User';
import { Context as ReviewContext } from 'context/Review';
import FS, { SCALE_HEIGHT } from 'lib/utils/normalize';
import { useFocusEffect } from '@react-navigation/native';
import { MAIN_COLOR } from 'constants/colors';

const sortParams = {
  0: 'recent',
  1: 'popular',
};

const Home = () => {
  const { state:user, getInformation } = useContext(UserContext);
  const { state, getReview, upReview, upDown } = useContext(ReviewContext);

  useEffect(() => {
    getInformation();
    getReview();
  }, []);

  return (
    state.reviews !=null &&
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header
          headerStyle={styles.header}
          title={user.collegeName}
          titleStyle={styles.title}
        />
      </View>
      <FlatList
      data={state.reviews && state.reviews}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => {
        return(
        <View>
            <Text>1</Text>
        </View>
        )
      }}
    />
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
