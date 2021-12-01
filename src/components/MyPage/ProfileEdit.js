import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import style from 'constants/styles';
import Icon from 'widgets/Icon';

const ProfileEdit = () => {
  return (
    <TouchableOpacity style={[styles.container, style.flexRow]}>
      <Text style={styles.text}>프로필 수정</Text>
      <Icon source={require('public/icons/profile_edit.png')} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28 * SCALE_HEIGHT,
    marginLeft: 20 * SCALE_WIDTH,
    marginBottom: 30 * SCALE_HEIGHT,
    width: 335 * SCALE_WIDTH,
    height: 37 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    borderRadius: SCALE_HEIGHT * 8,
  },
  text: {
    fontSize: FS(14),
  },
  icon: {
    marginLeft: 3 * SCALE_WIDTH,
    width: 13 * SCALE_WIDTH,
    height: 13 * SCALE_WIDTH,
  },
});

export default ProfileEdit;
