import React, { useContext, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Context as UserContext } from 'context/User';
import { Context as ReviewContext } from 'context/Review';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import Divider from 'widgets/Divider';
import ReviewCard from 'components/Home/ReviewCard';
import { useFocusEffect } from '@react-navigation/native';
import LoadingIndicator from 'components/LoadingIndicator';

const Home = () => {
  const { state: user, getInformation } = useContext(UserContext);
  const { state, getReview, getFilterType } = useContext(ReviewContext);

  useEffect(() => {
    getInformation();
    getReview();
    getFilterType();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getReview();
    }, []),
  );

  return (
    <View style={styles.container}>
      {state.reviews ? (
        <>
          <View
            style={{
              height: 48 * SCALE_HEIGHT,
              justifyContent: 'center',
              borderBottomWidth: 1 * SCALE_HEIGHT,
              borderBottomColor: '#E3E3E3',
            }}
          >
            <Text style={styles.college}>{user.collegeName}</Text>
          </View>
          <FlatList
            data={state.reviews}
            keyExtractor={(item) => item.Content}
            renderItem={({ item }) => {
              return (
                <>
                  <ReviewCard item={item} container={styles.cardContainer} />
                  <Divider />
                </>
              );
            }}
          />
        </>
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  college: {
    fontSize: FS(20),
    fontWeight: 'bold',
    marginLeft: 14 * SCALE_WIDTH,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
  widthspace: {
    width: '80%',
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
  filter: {
    marginTop: 8 * SCALE_HEIGHT,
  },
  filterColor: {
    color: '#CE476B',
    marginRight: 3 * SCALE_WIDTH,
  },
  name: {
    marginLeft: 6 * SCALE_WIDTH,
    fontSize: FS(12),
  },
  marginbottomfoot: {
    marginBottom: 8 * SCALE_HEIGHT,
  },
  profileImage: {
    marginTop: 8 * SCALE_HEIGHT,
    marginLeft: 14 * SCALE_WIDTH,
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_HEIGHT,
    borderRadius: 24 * SCALE_HEIGHT,
    borderWidth: 1,
  },
  photo: {
    marginTop: 7 * SCALE_HEIGHT,
    width: 375 * SCALE_WIDTH,
    height: 334 * SCALE_HEIGHT,
    borderWidth: 1,
  },
  paddinghoriztontal: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    marginTop: 11 * SCALE_HEIGHT,
  },
  locationicon: { marginLeft: 4 * SCALE_WIDTH, width: 10 * SCALE_WIDTH, height: 13 * SCALE_HEIGHT },
  placetext: { marginLeft: 5.8 * SCALE_WIDTH, color: '#767676' },
  cotent: { marginTop: 7 * SCALE_HEIGHT, marginBottom: 7 * SCALE_HEIGHT },
  storename: { fontSize: FS(14), fontWeight: 'bold' },
  updownicon: { width: 26 * SCALE_WIDTH, height: 26 * SCALE_HEIGHT },
});

export default Home;
