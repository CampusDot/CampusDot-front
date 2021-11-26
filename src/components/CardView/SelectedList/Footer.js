import React from 'react';
import { Text, StyleSheet } from 'react-native';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Footer = ({ comment }) => {
  return <Text style={styles.text}>{comment}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(12),
    lineHeight: 20 * SCALE_HEIGHT,
    color: '#191919',
    marginVertical: 10 * SCALE_HEIGHT,
    paddingHorizontal: 10 * SCALE_WIDTH,
  },
});

export default Footer;
