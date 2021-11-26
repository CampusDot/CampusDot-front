import React from 'react';
import Header from 'components/Header';
import ReviewWriteButton from 'components/Header/Create/ReviewWriteButton';
import ReviewInput from 'components/Create/ReviewInput';
import ReviewCreateProvider from 'providers/ReviewCreate';

const CreateReview = ({ id }) => {
  return (
    <ReviewCreateProvider>
      <Header title="리뷰 작성" back actions={[<ReviewWriteButton />]} />
      <ReviewInput id={id} />
    </ReviewCreateProvider>
  );
};

export default CreateReview;
