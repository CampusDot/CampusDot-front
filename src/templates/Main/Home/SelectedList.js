import React from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/Main/RestaurantLists/Header';
import Information from 'components/Main/SelectedList/Information';
import RestaurantCardView from 'components/Main/SelectedList/RestaurantCardView';

const Lists = [
  {
    Title: '황소곱창',
    Content: 'zzz',
    address: '신촌',
    _id: 1,
  },
  {
    Title: '공복',
    Content: 'zzz',
    address: '연희동',
    _id: 2,
  },
  {
    Title: '대포찜닭',
    Content: 'zzz',
    address: '서대문구',
    _id: 3,
  },
];
const SelectedList = () => {
  return (
    <ScrollView style={{ marginTop: 100 }}>
      <Header />
      <Information />
      {Lists.map((item) => {
        return <RestaurantCardView information={item} key={item._id} />;
      })}
    </ScrollView>
  );
};

export default SelectedList;
