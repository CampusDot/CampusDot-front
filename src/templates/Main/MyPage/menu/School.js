import React, { useState } from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import Photo from 'components/Auth/School/Photo';
import CollegeButton from 'components/Auth/School/CollegeButton';
import style from 'constants/styles';
import CollegeNext from 'components/Header/Sign/CollegNext';
import CollegeModal from 'components/Auth/School/CollegeModal';

const School = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <View style={style.backwhite}>
      <Header
        back={type !== 'Sign' && true}
        title="학교 인증"
        titleStyle={style.headertitle}
        actions={[type === 'Sign' ? <CollegeNext setModal={setModal} /> : null]}
      />
      <Photo />
      <CollegeButton />
      <CollegeModal modal={modal} setModal={setModal} />
    </View>
  );
};

export default School;
