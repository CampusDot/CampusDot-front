import React, { useEffect } from 'react';
import { View } from 'react-native';
import SignUpInput from 'components/Auth/SignUp/SignUpInput';
import SignUpButton from 'components/Auth/SignUpButton';
import Header from 'components/Header';
import { useSign } from 'providers/Sign';

const SignUp = ({ email, password, isSNS }) => {
  const { initValue } = useSign();
  useEffect(() => {
    initValue(email, password, isSNS);
  }, [email]);
  return (
    <View>
      <Header back title="회원가입" />
      <SignUpInput />
      <SignUpButton />
    </View>
  );
};

export default SignUp;
