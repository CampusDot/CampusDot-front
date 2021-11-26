/* eslint-disable no-nested-ternary */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { push } from 'lib/utils/navigation';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import style from 'constants/styles';
import Icon from 'widgets/Icon';

const menuLists = {
  '먹어 볼래': 0,
  '내가 쓴 리스트': 1,
  '다녀 온 가게': 2,
  설정: 3,
};

const Section = ({ title }) => {
  const icon =
    title === '먹어 볼래'
      ? require('public/icons/tab_home.png')
      : title === '내가 쓴 리스트'
      ? require('public/icons/tab_stamp.png')
      : title === '다녀 온 가게'
      ? require('public/icons/tab_account.png')
      : require('public/icons/tab_notice.png');

  const onClickSection = () => {
    push('SelectedSection', { menu: menuLists[title] });
  };
  return (
    <TouchableOpacity style={[styles.container, style.flexRow]} onPress={onClickSection}>
      <Icon source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Icon source={require('public/icons/profile_move.png')} style={styles.iconsmall} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347 * SCALE_WIDTH,
    height: 77 * SCALE_HEIGHT,
    backgroundColor: MAIN_COLOR,
    marginBottom: 20 * SCALE_HEIGHT,
    marginLeft: 14 * SCALE_WIDTH,
    borderRadius: 12 * SCALE_HEIGHT,
  },
  title: {
    marginLeft: 2 * SCALE_WIDTH,
    fontSize: FS(16),
    fontWeight: 'bold',
    width: 260 * SCALE_WIDTH,
  },
  iconsmall: {
    width: 20 * SCALE_WIDTH,
    height: 20 * SCALE_WIDTH,
  },
  icon: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    marginLeft: 15 * SCALE_WIDTH,
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
});

export default Section;
