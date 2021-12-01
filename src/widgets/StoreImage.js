import React from 'react';
import { GOOGLE_MAPS_KEY } from 'constants/app';
import { Image } from 'react-native';
import isCustomImage from 'lib/utils/customImage';

const urlConverter = (reference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${reference}&key=${GOOGLE_MAPS_KEY}`;
};

const StoreImage = ({ image, imageStyle }) => {
  return (
    <Image
      style={imageStyle}
      source={{ uri: isCustomImage(image) ? image : urlConverter(image) }}
    />
  );
};

export default StoreImage;
