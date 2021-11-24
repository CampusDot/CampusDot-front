import React from 'react';
import { FlatList } from 'react-native';
import ReviewCard from './ReviewCard';

const SelectedStoreReview = ({ Review }) => {
  return (
    <FlatList
      data={Review}
      keyExtractor={(_) => _._id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <ReviewCard information={item} />;
      }}
    />
  );
};

export default SelectedStoreReview;
