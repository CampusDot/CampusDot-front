import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import LoadingIndicator from 'components/LoadingIndicator';
import style from 'constants/styles';
import Icon from 'widgets/Icon';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const OtherCollegeRanking = () => {
  const { state, getOtherCollegeRanking } = useContext(CollegeContext);
  useEffect(() => {
    if (!state.otherRanking) getOtherCollegeRanking();
  }, []);
  return (
    <>
      {state.otherRanking ? (
        <>
          <Icon source={require('public/icons/ranker.png')} style={styles.icon} />
          {state.otherRanking.map((item, index) => {
            const { Name, StampCount } = item;
            return (
              <View style={[styles.container, style.flexRow, style.space_between]} key={Name}>
                <View style={style.flexRow}>
                  <Icon source={require('public/icons/rank_circle.png')} style={styles.circle} />
                  <Text style={[styles.ranking, index === 9 && styles.ten]}>{index + 1}</Text>
                  <Text style={styles.name}>{Name}</Text>
                </View>
                <View style={style.flexRow}>
                  <Icon source={require('public/icons/stamp.png')} style={styles.stamp} />
                  <Text style={styles.stampText}>{StampCount}개</Text>
                </View>
              </View>
            );
          })}
        </>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10 * SCALE_HEIGHT,
    paddingHorizontal: 20 * SCALE_WIDTH,
  },
  icon: {
    width: 14 * SCALE_WIDTH,
    height: 10 * SCALE_HEIGHT,
    marginLeft: 33 * SCALE_WIDTH,
    marginTop: 20 * SCALE_HEIGHT,
    marginBottom: 4 * SCALE_HEIGHT,
  },
  circle: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    marginRight: 9 * SCALE_WIDTH,
  },
  name: {
    fontSize: FS(18),
    color: '#505050',
  },
  ranking: {
    fontSize: FS(20),
    position: 'absolute',
    color: '#505050',
    left: 13 * SCALE_WIDTH,
  },
  stamp: {
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_WIDTH,
  },
  stampText: {
    fontSize: FS(14),
    color: '#505050',
    marginLeft: 6 * SCALE_WIDTH,
  },
  ten: {
    left: 9 * SCALE_WIDTH,
  },
});

export default OtherCollegeRanking;
