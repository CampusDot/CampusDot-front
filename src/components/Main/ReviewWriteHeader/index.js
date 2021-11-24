import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import style from 'constants/styles';
import { Context as ReviewContext } from 'context/Review';
import { useReviewCreate } from 'providers/ReviewCreate';

export const ReviewWriteHeader = ({ setIsWrite }) => {
  const { setStore, store, setReview, review, setRating, rating } = useReviewCreate();
  const { postReview } = useContext(ReviewContext);
  const onClickBack = () => {
    setIsWrite(false);
  };
  const onClickComplete = async () => {
    await postReview({
      Content: review,
      Rating: rating,
      Store: store,
    });
    setStore(null);
    setReview('');
    setRating('0');
    setIsWrite(false);
  };
  return (
    <View style={[styles.CLSHcontainer, style.flexRow]}>
      <TouchableOpacity onPress={onClickBack}>
        <Text>뒤로가기       </Text>
      </TouchableOpacity>
      <Text>리뷰 작성        </Text>
      <TouchableOpacity onPress={onClickComplete}>
        <Text>완료</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  CLSHcontainer: {
    height: 40,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default ReviewWriteHeader;
