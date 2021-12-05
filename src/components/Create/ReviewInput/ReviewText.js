import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';
import style from 'constants/styles';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const ReviewText = () => {
  const { onChangeValue, information } = useReviewCreate();

  const onChangeReview = (text) => {
    onChangeValue('review', text);
  };

  return (
    <View style={styles.container}>
      <View style={[style.flexRow, styles.spacebetween]}>
        <Text style={styles.text}>리뷰</Text>
        <Text style={styles.textlength}>{`${information.review.length}/500`}</Text>
      </View>
      <TextInput
        style={styles.textinput}
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

const styles = StyleSheet.create({
  container: {
    width: 336 * SCALE_WIDTH,
    height: 101 * SCALE_HEIGHT,
    justifyContent: 'space-between',
    marginTop: 24 * SCALE_HEIGHT,
  },
  textinput: {
    width: 335 * SCALE_WIDTH,
    height: 68 * SCALE_HEIGHT,
    borderBottomWidth: 1 * SCALE_WIDTH,
    borderColor: '#999999',
  },
  text: {
    fontSize: FS(16),
  },
  textlength: {
    fontSize: FS(14),
    color: '#B4B4B4',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
});
export default ReviewText;
