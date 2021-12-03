import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import style from 'constants/styles';

const SignDivider = ({ text }) => {
  return (
    <View style={[style.flexRow, styles.margin]}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginTop: 38 * SCALE_HEIGHT,
    marginHorizontal: 19.5 * SCALE_WIDTH,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A1A1A1',
  },
  text: {
    fontSize: FS(16),
    marginHorizontal: 21 * SCALE_WIDTH,
  },
});
export default SignDivider;
