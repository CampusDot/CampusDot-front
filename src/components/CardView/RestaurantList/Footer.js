import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

const Footer = ({ title, comment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {comment && <Text style={styles.comment}>{comment}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12 * SCALE_WIDTH,
    paddingVertical: 12 * SCALE_HEIGHT,
  },
  title: {
    fontSize: FS(14),
    fontWeight: 'bold',
  },
  comment: {
    fontSize: FS(12),
    marginTop: 5 * SCALE_HEIGHT,
  },
});

export default Footer;
