import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import getAchivement, { getBadge } from 'lib/utils/achivements';
import Icon from 'widgets/Icon';

const LevelBadge = ({ number, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Icon source={getBadge(number)} style={styles.badgeicon} />
      <Text style={styles.text}>{getAchivement(number)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 127 * SCALE_WIDTH,
    height: 44 * SCALE_HEIGHT,
    borderRadius: 11 * SCALE_HEIGHT,
    borderWidth: 1 * SCALE_WIDTH,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: FS(16),
    color: '#ffffff',
  },
  badgeicon: {
    width: 31 * SCALE_WIDTH,
    height: 22 * SCALE_HEIGHT,
  },
});
export default LevelBadge;
