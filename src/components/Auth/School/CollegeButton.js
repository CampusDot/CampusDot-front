import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { useSign } from 'providers/Sign';

const CollegeButton = () => {
  const { onClickCertify } = useSign();

  return (
    <TouchableOpacity style={styles.button} onPress={onClickCertify}>
      <Text style={styles.text}>학교 인증</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(18),
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: 335 * SCALE_WIDTH,
    height: 48 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    backgroundColor: '#73B979',
    marginLeft: 20 * SCALE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42 * SCALE_HEIGHT,
  },
});

export default CollegeButton;
