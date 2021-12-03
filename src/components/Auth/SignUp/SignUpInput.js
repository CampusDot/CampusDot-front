import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { useSign } from 'providers/Sign';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const SignUpInput = () => {
  const { information, onChangeValue } = useSign();

  return (
    <View>
      {information.isSNS ? null : (
        <>
          <Text style={[styles.text, styles.margintop]}>이메일</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => onChangeValue('email', text)}
            autoCorrect={false}
            placeholder="이메일를 입력해주세요"
          />
          <Text style={styles.text}>비밀번호</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => onChangeValue('password', text)}
            autoCorrect={false}
            placeholder="비밀번호를 입력해주세요"
          />
        </>
      )}
      <Text style={styles.text}>닉네임</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => onChangeValue('name', text)}
        autoCorrect={false}
        placeholder="닉네임을 입력해주세요"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  margintop: {
    marginTop: 28 * SCALE_HEIGHT,
  },
  textinput: {
    width: 335 * SCALE_WIDTH,
    height: 48 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    borderWidth: 2 * SCALE_WIDTH,
    borderColor: '#73B979',
    marginLeft: 20 * SCALE_WIDTH,
    justifyContent: 'center',
    paddingLeft: 10 * SCALE_WIDTH,
    marginBottom: 18 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(18),
    marginLeft: 30 * SCALE_WIDTH,
    marginBottom: 11 * SCALE_HEIGHT,
  },
});

export default SignUpInput;
