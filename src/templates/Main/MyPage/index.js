import React from 'react';
import { View } from 'react-native';
import Profile from 'components/MyPage/Profile';
import Section from 'components/MyPage/Section';

const MyPage = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <Profile />
      <Section title="먹어 볼래" />
      <Section title="내가 쓴 리스트" />
      <Section title="다녀 온 가게" />
      <Section title="설정" />
    </View>
  );
};

export default MyPage;
