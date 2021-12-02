import React from 'react';
import { Button } from 'react-native';
import { useSign } from 'providers/Sign';

const SignUpButton = () => {
  const { onClickSignUp } = useSign();

  return <Button title="Signup" onPress={onClickSignUp} />;
};

export default SignUpButton;
