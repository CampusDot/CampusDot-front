import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import ListCardView from './ListCardView';

const RestaurantLists = () => {
  const { state } = useContext(CollegeContext);
  return (
    <View>
      <Text>우리학교 맛집</Text>
      {state.storeLists.map((item) => {
        return <ListCardView key={item._id} information={item} />;
      })}
    </View>
  );
};

export default RestaurantLists;
