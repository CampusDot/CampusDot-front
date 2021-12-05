import React, { useState, useContext } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Go from 'components/Recommend/Go';
import Filter from 'components/Recommend/Filter';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { Context as ReviewContext } from 'context/Review';

const Recommend = () => {
  const { state } = useContext(ReviewContext);
  const [isGo, setIsGo] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const onClickOneMore = () => {
    setIsGo(false);
  };

  return (
    <ScrollView style={{ backgroundColor: '#000', flex: 1 }}>
      {isGo ? null : <Go setIsGo={setIsGo} selectedFilter={selectedFilter} />}
      {isGo && (
        <TouchableOpacity style={styles.box} onPress={onClickOneMore}>
          <Text style={styles.oneMore}>한번 더</Text>
        </TouchableOpacity>
      )}
      <Filter isGo={isGo} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 350 * SCALE_WIDTH,
    height: 31 * SCALE_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 16 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14 * SCALE_WIDTH,
  },
  oneMore: {
    fontWeight: 'bold',
    fontSize: FS(14),
    color: '#000',
  },
});

export default Recommend;
