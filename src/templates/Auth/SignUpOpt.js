import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import SocialLogin from 'components/Auth/SocialLogin';
import SignNavigate from 'components/Auth/SignNavigate';
import Header from 'components/Header';
import style from 'constants/styles';
import SignLogo from 'components/Auth/SignLogo';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import SignDivider from 'components/Auth/SignDivider';

const SignUpOpt = () => {
  return (
    <View style={style.backwhite}>
      <Header back title="회원가입" titleStyle={style.headertitle} />
      <SignLogo logoStyle={styles.logo} />
      <SignNavigate />
      <SignDivider text="소셜 아이디로 가입" />
      <SocialLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150 * SCALE_WIDTH,
    height: 99 * SCALE_HEIGHT,
    marginLeft: 112 * SCALE_WIDTH,
    marginTop: 164 * SCALE_HEIGHT,
  },
});
export default SignUpOpt;
