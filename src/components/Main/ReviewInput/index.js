import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';

const ReviewInput = () => {
  const { review, setReview, rating, setRating } = useReviewCreate();
  const onChangeRating = (text) => {
    setRating(text);
  };

  const onChangeReview = (text) => {
    setReview(text);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>별점</Text>
      <TextInput
        value={rating}
        onChangeText={(text) => onChangeRating(text)}
        placeholder="평점을 매겨 주세요."
        multiline={false}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>리뷰</Text>
      <TextInput
        value={review}
        onChangeText={(text) => onChangeReview(text)}
        placeholder="리뷰를 작성해주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default ReviewInput;
