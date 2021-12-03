import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getStamp, getNextStamp, getLevel } from 'lib/utils/achivements';
import { Context as UserContext } from 'context/User';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import style from 'constants/styles';
import ProgressBar from './ProgressBar';

const Achivement = () => {
  const { state } = useContext(UserContext);
  const stamp = state.allStamp;
  return (
    <View style={[styles.container, style.flexRow]}>
      <Text style={styles.level}>{getLevel(stamp)}</Text>
      {getNextStamp(stamp) !== getStamp(stamp) && (
        <ProgressBar step={stamp - getStamp(stamp)} steps={getNextStamp(stamp) - getStamp(stamp)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    paddingBottom: 14 * SCALE_HEIGHT,
  },
  level: {
    fontSize: FS(16),
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Achivement;
