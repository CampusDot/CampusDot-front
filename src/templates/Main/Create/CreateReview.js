import React from 'react';
import { ScrollView } from 'react-native';
import ReviewInput from 'components/Main/ReviewInput';
import Header from 'components/Main/ReviewInput/Header';

const CreateReview = () => {
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <Header />
      <ReviewInput />
    </ScrollView>
  );
};

export default CreateReview;
