import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import style from 'constants/styles';

const SignUpOpt = () => {
  const onClickSignUp = () => {
    navigate('SignUpOpt');
  };

  return (
    <View style={[style.flexRow, styles.flex]}>
      <Text style={styles.text}>회원이 아니신가요?</Text>
      <TouchableOpacity onPress={onClickSignUp}>
        <Text style={styles.texttouch}>회원가입 하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 104.7 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(16),
  },
  texttouch: {
    fontSize: FS(16),
    color: '#73B979',
    marginLeft: 10 * SCALE_WIDTH,
  },
});

export default SignUpOpt;
