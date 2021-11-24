import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import ReviewWriteBack from 'components/Header/Create/ReviewWriteBack';
import ReviewWriteButton from 'components/Header/Create/ReviewWriteButton';
import ReviewInput from 'components/Main/ReviewInput';

const CreateReview = ({ setIsWrite }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        landings={<ReviewWriteBack setIsWrite={setIsWrite} />}
        actions={<ReviewWriteButton setIsWrite={setIsWrite} />}
      />
      <ReviewInput />
    </View>
  );
};

export default CreateReview;
