import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import ListCardView from './ListCardView';

const RestaurantLists = () => {
  const { state } = useContext(CollegeContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>우리학교 맛집</Text>
      {state.storeLists.map((item) => {
        return <ListCardView key={item._id} information={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 13 * SCALE_HEIGHT,
    paddingHorizontal: 14 * SCALE_WIDTH,
  },
  title: {
    fontSize: FS(16),
    fontWeight: 'bold',
    marginBottom: 10 * SCALE_HEIGHT,
  },
});

export default RestaurantLists;
