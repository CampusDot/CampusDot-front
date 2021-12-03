import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';
import style from 'constants/styles';

const Friend = () => {
  const onClickButton = () => {
    navigate('FriendCollege');
  };

  return (
    <TouchableOpacity onPress={onClickButton} style={styles.container}>
      <Icon source={require('public/icons/home_friend.png')} style={style.icons} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 46 * SCALE_WIDTH,
    height: 40 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Friend;
