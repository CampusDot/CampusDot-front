import React from 'react';
import { Text, View } from 'react-native';
import ListCardView from './ListCardView';

const Lists = [
  {
    _id: 'r1',
    PostUser: 'r1',
    Title: 'r1',
    Content: 'r1',
  },
  {
    _id: 'r2',
    PostUser: 'r2',
    Title: 'r2',
    Content: 'r2',
  },
  {
    _id: 'r3',
    PostUser: 'r3',
    Title: 'r3',
    Content: 'r3',
  },
  {
    _id: 'r4',
    PostUser: 'r4',
    Title: 'r4',
    Content: 'r4',
  },
];

const RestaurantLists = () => {
  return (
    <View>
      <Text>우리학교 맛집</Text>
      {Lists.map(({ _id }) => {
        return <ListCardView key={_id} />;
      })}
    </View>
  );
};

export default RestaurantLists;
