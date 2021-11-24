import React from 'react';
import { View } from 'react-native';
import ReviewWriteHeader from 'components/Main/ReviewWriteHeader';
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
