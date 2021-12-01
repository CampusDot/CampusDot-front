import React, { useEffect } from 'react';
import { View } from 'react-native';
import SignInInput from 'components/Auth/SignIn/SignInInput';
import SignInButton from 'components/Auth/SignInButton';
import SocialLogin from 'components/Auth/SocialLogin';
import SignUpOptButton from 'components/Auth/SignUpOptButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as env from 'constants/app';

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
    <View style={{ flex: 1 }}>
      <SignInInput />
      <SignInButton />
      <SocialLogin />
      <SignUpOptButton />
    </View>
  );
};

export default SignIn;
