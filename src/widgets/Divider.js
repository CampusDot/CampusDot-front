import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SCALE_HEIGHT } from 'lib/utils/normalize';

const Divider = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 9 * SCALE_HEIGHT,
    backgroundColor: '#f5f5f5',
  },
});
export default Divider;
