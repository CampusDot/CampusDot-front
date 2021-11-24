import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import { useReviewCreate } from 'providers/ReviewCreate';

const ReviewWriteButton = () => {
  const { setStore, store, setReview, review, setRating, rating } = useReviewCreate();
  const { postReview } = useContext(ReviewContext);
  const onClickComplete = async () => {
    await postReview({
      Content: review,
      Rating: rating,
      Store: store,
    });
    setStore(null);
    setReview('');
    setRating('0');
  };
  return (
    <TouchableOpacity onPress={onClickComplete} style={{ width: 40, height: 40, borderWidth: 1 }} />
  );
};

export default ReviewWriteButton;
