import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Restaurant from './Restaurant';

const Restaurants = [
  {
    Name: 'r1',
    Photo: 'r1',
    percent: 30,
    _id: 'r1',
  },
  {
    Name: 'r2',
    Photo: 'r2',
    percent: 60,
    _id: 'r2',
  },
  {
    Name: 'r3',
    Photo: 'r3',
    percent: 74,
    _id: 'r3',
  },
  {
    Name: 'r4',
    Photo: 'r4',
    percent: 23,
    _id: 'r4',
  },
  {
    Name: 'r5',
    Photo: 'r5',
    percent: 59,
    _id: 'r5',
  },
];

const Challenge = () => {
  return (
    <View>
      <Text style={{ marginTop: 100 }}>도전 중</Text>
      <FlatList
        horizontal
        data={Restaurants}
        keyExtractor={(store) => store._id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Restaurant information={item} />;
        }}
      />
    </View>
  );
};

export default Challenge;
