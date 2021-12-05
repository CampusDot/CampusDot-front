import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import style from 'constants/styles';
import { useReviewCreate } from 'providers/ReviewCreate';

const Filter = () => {
  const { state, getFilterType } = useContext(ReviewContext);
  const { selectedFilter, setSelectedFilter } = useReviewCreate();

  const onClickFilter = (id) => {
    if (selectedFilter.includes(id)) {
      setSelectedFilter(selectedFilter.filter((item) => item !== id));
    } else {
      setSelectedFilter([...selectedFilter, id]);
    }
  };

  useEffect(() => {
    getFilterType();
  }, []);

  return (
    <>
      <Text style={styles.title}>필터</Text>
      <View style={[style.flexRow, styles.container]}>
        {state.filterType &&
          state.filterType.map(({ Type, _id: id }) => (
            <TouchableOpacity
              key={id}
              style={[styles.box, selectedFilter.includes(id) && styles.active]}
              onPress={() => onClickFilter(id)}
            >
              <Text style={[styles.type, selectedFilter.includes(id) && styles.activeText]}>
                {Type}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FS(16),
    marginTop: 25 * SCALE_HEIGHT,
    marginBottom: 13 * SCALE_HEIGHT,
  },
  container: {
    flexWrap: 'wrap',
  },
  box: {
    paddingVertical: 5 * SCALE_WIDTH,
    paddingHorizontal: 14 * SCALE_WIDTH,
    borderWidth: 1 * SCALE_HEIGHT,
    borderRadius: 16 * SCALE_HEIGHT,
    marginRight: 10 * SCALE_WIDTH,
    marginBottom: 15 * SCALE_HEIGHT,
  },
  type: {
    fontSize: FS(14),
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: '#000',
  },
  activeText: {
    fontSize: FS(14),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Filter;
