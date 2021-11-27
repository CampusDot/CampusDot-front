import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';
import { Rating as StarRating } from 'react-native-ratings';
import style from 'constants/styles';
import { MAIN_COLOR } from 'constants/colors';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Rating = () => {
  const { onChangeValue, information } = useReviewCreate();
  const number = information.rating;
  const onChangeRating = (text) => {
    onChangeValue('rating', text);
  };

  return (
    <View style={[styles.container, style.flexRow]}>
      <Text style={styles.text}>별점</Text>
      <StarRating
        startingValue={number}
        imageSize={17 * SCALE_WIDTH}
        type="custom"
        ratingColor={MAIN_COLOR}
        onFinishRating={(el) => onChangeRating(el)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 336 * SCALE_WIDTH,
    height: 19 * SCALE_HEIGHT,
    justifyContent: 'space-between',
    marginTop: 34 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(16),
  },
});
export default Rating;
