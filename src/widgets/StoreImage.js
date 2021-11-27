import React from 'react';
import { GOOGLE_MAPS_KEY } from 'constants/app';
import { Image, View } from 'react-native';

const StoreImage = ({ image, imageStyle }) => {
  return (
    <>
      {image !== '' ? (
        <Image style={imageStyle} source={{ uri: image }} />
      ) : (
        <View style={imageStyle} />
      )}
    </>
  );
};

export default StoreImage;
