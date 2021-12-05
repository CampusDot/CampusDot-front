import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { Context as ReviewContext } from 'context/Review';

const Go = ({ setIsGo, selectedFilter }) => {
  const { getRecommendStore } = useContext(ReviewContext);
  const onClickGo = () => {
    setIsGo(true);
    getRecommendStore({ filters: selectedFilter });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘 뭐 먹지?</Text>
      <TouchableOpacity style={styles.box} onPress={onClickGo}>
        <Text style={styles.go}>GO!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 347 * SCALE_WIDTH,
    height: 500 * SCALE_HEIGHT,
    marginHorizontal: 14 * SCALE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 15 * SCALE_HEIGHT,
  },
  title: {
    fontSize: FS(20),
    fontWeight: 'bold',
    color: '#CE476B',
    textAlign: 'center',
  },
  box: {
    width: 84 * SCALE_WIDTH,
    height: 84 * SCALE_WIDTH,
    borderRadius: 84 * SCALE_WIDTH,
    backgroundColor: '#CE476B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13 * SCALE_HEIGHT,
  },
  go: {
    fontSize: FS(26),
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default Go;
