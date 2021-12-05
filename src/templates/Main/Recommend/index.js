import React, { useState, useContext } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import Go from 'components/Recommend/Go';
import Filter from 'components/Recommend/Filter';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { Context as ReviewContext } from 'context/Review';
import ReviewCard from 'components/Home/ReviewCard';
import LoadingIndicator from 'components/LoadingIndicator';

const Recommend = () => {
  const { state, initRecommendStore } = useContext(ReviewContext);
  const [isGo, setIsGo] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const onClickOneMore = () => {
    initRecommendStore();
    setIsGo(false);
  };

  return (
    <ScrollView style={{ backgroundColor: '#000', flex: 1 }}>
      {isGo ? null : <Go setIsGo={setIsGo} selectedFilter={selectedFilter} />}
      {isGo && (
        <>
          {state.recommend ? (
            <ReviewCard item={state.recommend} container={styles.container} />
          ) : (
            <View style={styles.container}>
              <LoadingIndicator />
            </View>
          )}
          <TouchableOpacity style={styles.box} onPress={onClickOneMore}>
            <Text style={styles.oneMore}>한번 더</Text>
          </TouchableOpacity>
        </>
      )}
      <Filter isGo={isGo} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 347 * SCALE_WIDTH,
    height: 500 * SCALE_HEIGHT,
    marginHorizontal: 14 * SCALE_WIDTH,
    backgroundColor: '#fff',
    marginTop: 15 * SCALE_HEIGHT,
  },
  box: {
    width: 350 * SCALE_WIDTH,
    height: 31 * SCALE_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 16 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14 * SCALE_WIDTH,
    marginTop: 14 * SCALE_HEIGHT,
  },
  oneMore: {
    fontWeight: 'bold',
    fontSize: FS(14),
    color: '#000',
  },
});

export default Recommend;
