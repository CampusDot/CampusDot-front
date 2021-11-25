import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';

const ReviewWriteButton = () => {
  const { onClickPostReview } = useReviewCreate();

  return (
    <TouchableOpacity
      onPress={onClickPostReview}
      style={{ width: 40, height: 40, borderWidth: 1 }}
    />
  );
};

export default ReviewWriteButton;
