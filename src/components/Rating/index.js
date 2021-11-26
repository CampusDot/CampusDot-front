import React from 'react';
import { Rating as StarRating } from 'react-native-ratings';
import { MAIN_COLOR } from 'constants/colors';
import { SCALE_WIDTH } from 'lib/utils/normalize';

const Rating = ({ number }) => {
  return (
    <StarRating
      startingValue={number}
      imageSize={10 * SCALE_WIDTH}
      type="custom"
      ratingColor={MAIN_COLOR}
    />
  );
};

export default Rating;
