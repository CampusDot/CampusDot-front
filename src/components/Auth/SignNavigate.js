import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const SignNavigate = () => {
  const onClickSignUp = () => {
    navigate('SignUp', { email: '', password: '', isSNS: false });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onClickSignUp}>
      <Text style={styles.text}>이메일로 가입하기</Text>
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
    marginTop: 41.1 * SCALE_HEIGHT,
    marginBottom: 18 * SCALE_HEIGHT,
  },
});
export default SignNavigate;
