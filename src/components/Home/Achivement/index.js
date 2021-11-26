import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import style from 'constants/styles';
import { getStamp, getNextStamp } from 'lib/utils/achivements';
import { Context as UserContext } from 'context/User';
import { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import Level from './Level';
import ProgressBar from './ProgressBar';

const Achivement = () => {
  const { state } = useContext(UserContext);
  const stamp = state.allStamp;
  return (
    <View style={styles.container}>
      <View style={[style.space_between, style.flexRow]}>
        <Level stamp={stamp} />
        <Level stamp={stamp} goal />
      </View>
      {getNextStamp(stamp) !== getStamp(stamp) && (
        <ProgressBar step={stamp - getStamp(stamp)} steps={getNextStamp(stamp) - getStamp(stamp)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 13 * SCALE_HEIGHT,
    paddingHorizontal: 14 * SCALE_WIDTH,
  },
});

export default Achivement;
