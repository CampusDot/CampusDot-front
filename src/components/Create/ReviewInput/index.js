import React, { useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';

const ReviewInput = ({ id }) => {
  const { onChangeValue, information } = useReviewCreate();

  const onChangeRating = (text) => {
    onChangeValue('rating', Number(text));
  };

  const onChangeReview = (text) => {
    onChangeValue('review', text);
  };

  useEffect(() => {
    onChangeValue('store', id);
  }, [id]);

  return (
    <View style={{ flex: 1 }}>
      <Text>별점</Text>
      <TextInput
        value={information.rating}
        onChangeText={(text) => onChangeRating(text)}
        placeholder="평점을 매겨 주세요."
        multiline={false}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>리뷰</Text>
      <TextInput
        value={information.review}
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
