import React from 'react';
import { Button } from 'react-native';
import { navigate } from 'lib/utils/navigation';

const SignNavigate = () => {
  const onClickSignUp = () => {
    navigate('SignUp', { email: '', password: '', isSNS: false });
  };

  return <Button title="이메일로 가입" onPress={onClickSignUp} />;
};

export default SignNavigate;
