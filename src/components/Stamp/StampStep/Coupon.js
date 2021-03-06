import React from 'react';
import Icon from 'widgets/Icon';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Coupon = () => {
  const onClickButton = () => {
    navigate('Coupon');
  };

  return (
    <TouchableOpacity onPress={onClickButton}>
      <Icon source={require('public/icons/coupon.png')} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 40 * SCALE_HEIGHT,
    width: 40 * SCALE_WIDTH,
  },
});
export default Coupon;
