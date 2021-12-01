import React from 'react';
import { View } from 'react-native';
import SignUpInput from 'components/Auth/SignUp/SignUpInput';
import SignUpButton from 'components/Auth/SignUpButton';
import Header from 'components/Header';

const SignUp = ({ email, password, isSNS }) => {
  return (
    <View>
      <Header back title="회원가입" />
      <SignUpInput email={email} password={password} isSNS={isSNS} />
      <SignUpButton />
    </View>
  );
};

export default SignUp;
