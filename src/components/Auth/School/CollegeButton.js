import React from 'react';
import { Button } from 'react-native';
import { useSign } from 'providers/Sign';

const CollegeButton = () => {
  const { onClickSignIn } = useSign();
  return <Button title="학교인증" onPress={onClickSignIn} />;
};

export default CollegeButton;
