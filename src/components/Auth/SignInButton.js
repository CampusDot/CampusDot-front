import React from 'react';
import { Button } from 'react-native';
import { useSign } from 'providers/Sign';

const SignInButton = () => {
  const { onClickSignIn } = useSign();
  return <Button title="sign in" onPress={onClickSignIn} />;
};

export default SignInButton;
