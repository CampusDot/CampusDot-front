import React from 'react';
import { Image } from 'react-native';

const ProfileImage = ({ image, imageStyle }) => {
  return <Image style={imageStyle} source={{ uri: image }} />;
};

export default ProfileImage;
