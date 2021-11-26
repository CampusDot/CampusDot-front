import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import getAchivement, { getLevel, getNextLevel, getNextAchivement } from 'lib/utils/achivements';
import FS from 'lib/utils/normalize';
import { COLOR_1, COLOR_2 } from 'constants/colors';

const Level = ({ stamp, goal }) => {
  return (
    <View>
      <Text style={styles.level}>{goal ? getNextLevel(stamp) : getLevel(stamp)}</Text>
      <Text style={styles.achivement}>
        {goal ? getNextAchivement(stamp) : getAchivement(stamp)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  level: {
    fontSize: FS(10),
    color: COLOR_2,
  },
  achivement: {
    fontSize: FS(12),
    color: COLOR_1,
  },
});
export default Level;
