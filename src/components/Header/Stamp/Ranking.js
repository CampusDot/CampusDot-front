import React from 'react';
import Icon from 'widgets/Icon';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Ranking = () => {
  const onClickButton = () => {
    navigate('Ranking');
  };

  return (
    <TouchableOpacity onPress={onClickButton}>
      <Icon source={require('public/icons/ranking.png')} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 40 * SCALE_HEIGHT,
    width: 40 * SCALE_WIDTH,
  },
});
export default Ranking;
