import React from 'react';
import { TouchableOpacity } from 'react-native';

const ReviewWriteBack = ({ setIsWrite }) => {
  const onClickBack = () => {
    setIsWrite(false);
  };
  return (
    <TouchableOpacity onPress={onClickBack} style={{ width: 40, height: 40, borderWidth: 1 }} />
  );
};

export default ReviewWriteBack;
