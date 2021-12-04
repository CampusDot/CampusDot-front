import React, { useState } from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import Photo from 'components/Auth/School/Photo';
import CollegeButton from 'components/Auth/School/CollegeButton';
import style from 'constants/styles';
import CollegeNext from 'components/Header/Sign/CollegNext';
import CollegeModal from 'components/Auth/School/CollegeModal';

const School = ({ email, password, name, college }) => {
  return (
    <View style={style.backwhite}>
      <Header back title="학교 인증" titleStyle={style.headertitle} />
      <CollegeButton />
    </View>
  );
};

export default School;
