import React from 'react';
import { Rating as StarRating } from 'react-native-ratings';
import { MAIN_COLOR } from 'constants/colors';
import { SCALE_WIDTH } from 'lib/utils/normalize';

const RatingStar = ({ number, size, color }) => {
  const starcolor = color || MAIN_COLOR;
  return (
    <StarRating
      startingValue={number}
      imageSize={size * SCALE_WIDTH}
      type="custom"
      ratingColor={starcolor}
    />
  );
};

export default RatingStar;
