import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useSign } from 'providers/Sign';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const SignInButton = () => {
  const { onClickSignIn } = useSign();
  return (
    <TouchableOpacity style={styles.button} onPress={onClickSignIn}>
      <Text style={styles.text}>로그인</Text>
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
    backgroundColor: '#FFDE6E',
    marginLeft: 20 * SCALE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18 * SCALE_HEIGHT,
  },
});

export default SignInButton;
