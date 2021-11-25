import React from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from 'lib/utils/navigation';

const Coupon = () => {
  const onClickButton = () => {
    navigate('Coupon');
  };

  return (
    <TouchableOpacity onPress={onClickButton} style={{ width: 40, height: 40, borderWidth: 1 }} />
  );
};

export default Coupon;