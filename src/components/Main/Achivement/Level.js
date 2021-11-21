import React from 'react';
import { Text, View } from 'react-native';
import getAchivement, { getLevel, getNextLevel } from 'lib/utils/achivements';

const Level = ({ stamp, goal }) => {
  return (
    <View>
      <Text>{goal ? getNextLevel(stamp) : getLevel(stamp)}</Text>
      <Text>{getAchivement(stamp)}</Text>
    </View>
  );
};

export default Level;
