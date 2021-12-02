import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FS from 'lib/utils/normalize';
import getAchivement, { getLevel } from 'lib/utils/achivements';

const LevelText = ({ number, style }) => {
  return (
    <View style={[style, styles.center]}>
      <Text style={styles.text}>{getLevel(number)}</Text>
      <Text style={styles.text}>{getAchivement(number)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(12),
    color: '#ffffff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LevelText;
