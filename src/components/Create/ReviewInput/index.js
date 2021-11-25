import React, { useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';
import { onClickMultiple } from 'lib/utils/ImageEditor';

const ReviewInput = ({ id }) => {
  const { onChangeValue, information, setImages } = useReviewCreate();

  const onChangeRating = (text) => {
    onChangeValue('rating', text);
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
      <TouchableOpacity
        style={{ width: 40, height: 40, borderWidth: 1 }}
        onPress={() => onClickMultiple(setImages)}
      >
        <Text>사진</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewInput;
