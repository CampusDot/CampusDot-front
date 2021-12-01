import React from 'react';
import { Button } from 'react-native';
import { navigate } from 'lib/utils/navigation';

const SignUpOptButton = () => {
  const onClickSignUp = () => {
    navigate('SignUpOpt');
  };

  return <Button title="go to sign up opt" onPress={onClickSignUp} />;
};

export default SignUpOptButton;
