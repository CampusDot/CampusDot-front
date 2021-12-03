import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useSign } from 'providers/Sign';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const SignInInput = () => {
  const { onChangeValue } = useSign();

  return (
    <View>
      <TextInput
        onChangeText={(text) => onChangeValue('email', text)}
        style={[styles.textinput, styles.margintop]}
        autoCorrect={false}
        placeholder="아이디를 입력해주세요"
      />
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => onChangeValue('password', text)}
        autoCorrect={false}
        placeholder="비밀번호를 입력해주세요"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  margintop: {
    marginTop: 44 * SCALE_HEIGHT,
  },
  textinput: {
    width: 335 * SCALE_WIDTH,
    height: 48 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    borderWidth: 2 * SCALE_WIDTH,
    borderColor: '#FFDE6E',
    marginLeft: 20 * SCALE_WIDTH,
    justifyContent: 'center',
    paddingLeft: 10 * SCALE_WIDTH,
    marginBottom: 18 * SCALE_HEIGHT,
  },
});
export default SignInInput;
