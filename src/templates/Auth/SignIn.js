import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SignInInput from 'components/Auth/SignIn/SignInInput';
import SignInButton from 'components/Auth/SignInButton';
import SocialLogin from 'components/Auth/SocialLogin';
import SignUpOptButton from 'components/Auth/SignUpOptButton';
import SignLogo from 'components/Auth/SignLogo';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as env from 'constants/app';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import style from 'constants/styles';
import SignDivider from 'components/Auth/SignDivider';

const SignIn = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: env.webClientIdIOS,
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, []);
  return (
    <View style={style.backwhite}>
      <SignLogo logoStyle={styles.logo} />
      <SignInInput />
      <SignInButton />
      <SignDivider text="소셜 로그인" />
      <SocialLogin />
      <SignUpOptButton />
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 161 * SCALE_WIDTH,
    height: 99 * SCALE_HEIGHT,
    marginLeft: 107 * SCALE_WIDTH,
    marginTop: 118 * SCALE_HEIGHT,
  },
});

export default SignIn;
