import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SignUpInput from 'components/Auth/SignUp/SignUpInput';
import SignUpButton from 'components/Auth/SignUp/SignUpButton';
import Header from 'components/Header';
import { useSign } from 'providers/Sign';
import style from 'constants/styles';
import SignLogo from 'components/Auth/SignLogo';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import College from 'components/Auth/School/College';

const SignUp = ({ email, password, isSNS }) => {
  const { initValue } = useSign();

  useEffect(() => {
    initValue(email, password, isSNS);
  }, [email]);
  return (
    <View style={style.backwhite}>
      <Header back title="회원가입" titleStyle={style.headertitle} />
      <SignUpInput />
      <College />
      <SignUpButton />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150 * SCALE_WIDTH,
    height: 99 * SCALE_HEIGHT,
    marginLeft: 112 * SCALE_WIDTH,
    marginTop: 55 * SCALE_HEIGHT,
  },
});

export default SignUp;
