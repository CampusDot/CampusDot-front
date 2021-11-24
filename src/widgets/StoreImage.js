import React from 'react';
import { GOOGLE_MAPS_KEY } from 'constants/app';
import { Image, View } from 'react-native';

const urlConverter = (reference) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${reference}&key=${GOOGLE_MAPS_KEY}`;
};

const StoreImage = ({ image, imageStyle }) => {
  return (
    <>
      {image !== '' ? (
        <Image style={imageStyle} source={{ uri: urlConverter(image) }} />
      ) : (
        <View style={imageStyle} />
      )}
    </>
  );
};

export default StoreImage;
