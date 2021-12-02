import React from 'react';
import { View } from 'react-native';
import SocialLogin from 'components/Auth/SocialLogin';
import SignNavigate from 'components/Auth/SignNavigate';
import Header from 'components/Header';

const SignUpOpt = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header back title="회원가입" />
      <SignNavigate />
      <SocialLogin />
    </View>
  );
};

export default SignUpOpt;
