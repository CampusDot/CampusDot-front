import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import ReviewWriteButton from 'components/Header/Create/ReviewWriteButton';
import ReviewInput from 'components/Main/ReviewInput';
import ReviewCreateProvider from 'providers/ReviewCreate';

const CreateReview = () => {
  return (
    <ReviewCreateProvider>
      <View style={{ flex: 1 }}>
        <Header back actions={<ReviewWriteButton />} />
        <ReviewInput />
      </View>
    </ReviewCreateProvider>
  );
};

export default CreateReview;
