import React, { useEffect } from 'react';
import { View } from 'react-native';
import SignUpInput from 'components/Auth/SignUp/SignUpInput';
import SignUpButton from 'components/Auth/SignUpButton';
import Header from 'components/Header';
import { useSign } from 'providers/Sign';
import College from 'components/Auth/School/College';
import Photo from 'components/Auth/School/Photo';
import CollegeButton from 'components/Auth/School/CollegeButton';

const SignUp = () => {
  return (
    <View>
      <Header back title="학교인증" />
      <College/>
      <Photo/>
      <CollegeButton />
    </View>
  );
};

export default SignUp;
