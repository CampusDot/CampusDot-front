import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import style from 'constants/styles';
import Icon from 'widgets/Icon';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Filter = ({ isGo, selectedFilter, setSelectedFilter }) => {
  const { getFilterType, state } = useContext(ReviewContext);

  const onClickFilter = (type) => {
    if (selectedFilter.includes(type)) {
      setSelectedFilter(selectedFilter.filter((item) => item !== type));
    } else {
      setSelectedFilter([...selectedFilter, type]);
    }
  };

  useEffect(() => {
    getFilterType();
  }, []);

  useEffect(() => {
    if (!isGo) {
      setSelectedFilter([]);
    }
  }, [isGo]);

  return (
    <View style={{ marginTop: 16 * SCALE_HEIGHT }}>
      <View style={style.flexRow}>
        <Text style={styles.title}>필터</Text>
        <Icon source={require('public/icons/filter.png')} style={styles.icon} />
        <Text style={styles.sub}>필터를 선택해주세요</Text>
      </View>
      <View style={[style.flexRow, styles.container]}>
        {state.filterType &&
          state.filterType.map(({ Type, _id: id }) => {
            return (
              <TouchableOpacity
                key={id}
                style={[styles.box, selectedFilter.includes(id) && styles.active]}
                onPress={() => onClickFilter(id)}
                activeOpacity={0.8}
              >
                <Text style={!selectedFilter.includes(id) ? styles.type : styles.activeText}>
                  {Type}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 18 * SCALE_HEIGHT,
    marginLeft: 14 * SCALE_WIDTH,
    paddingBottom: 20 * SCALE_HEIGHT,
  },
  icon: {
    width: 11 * SCALE_WIDTH,
    height: 11 * SCALE_WIDTH,
  },
  title: {
    fontSize: FS(14),
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 12 * SCALE_WIDTH,
    marginRight: 6 * SCALE_WIDTH,
  },
  sub: {
    fontSize: FS(10),
    color: '#fff',
    marginLeft: 3 * SCALE_WIDTH,
  },
  box: {
    paddingVertical: 8 * SCALE_HEIGHT,
    paddingHorizontal: 12 * SCALE_WIDTH,
    borderWidth: 1 * SCALE_HEIGHT,
    borderRadius: 16 * SCALE_HEIGHT,
    borderColor: '#fff',
    marginRight: 11 * SCALE_WIDTH,
    marginBottom: 10 * SCALE_HEIGHT,
  },
  type: {
    fontSize: FS(14),
    fontWeight: 'bold',
    color: '#fff',
  },
  active: {
    backgroundColor: '#fff',
  },
  activeText: {
    fontSize: FS(14),
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Filter;
