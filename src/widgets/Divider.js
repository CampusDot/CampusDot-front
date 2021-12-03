import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SCALE_HEIGHT } from 'lib/utils/normalize';

const Divider = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 2 * SCALE_HEIGHT,
    backgroundColor: '#f2f2f2',
  },
});
export default Divider;
