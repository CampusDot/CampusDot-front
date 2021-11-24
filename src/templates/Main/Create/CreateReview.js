import React from 'react';
import { View } from 'react-native';
import { ReviewWriteHeader } from 'components/Header';
import ReviewInput from 'components/Main/ReviewInput';

const CreateReview = ({ setIsWrite }) => {
  return (
    <View style={{ flex: 1 }}>
      <ReviewWriteHeader setIsWrite={setIsWrite} />
      <ReviewInput />
    </View>
  );
};

export default CreateReview;
