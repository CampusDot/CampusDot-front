import React from 'react';
import { View } from 'react-native';
import Profile from 'components/MyPage/Profile';
import Section from 'components/MyPage/Section';
import Header from 'components/Header';
import style from 'constants/styles';
import ProfileEdit from 'components/MyPage/ProfileEdit';

const MyPage = () => {
  return (
    <View>
      <Header title="마이페이지" titleStyle={style.headertitle} />
      <Profile />
      <ProfileEdit />
      <Section title="먹어 볼래" />
      <Section title="내가 쓴 리스트" />
      <Section title="다녀 온 가게" />
      <Section title="설정" />
    </View>
  );
};

export default MyPage;
