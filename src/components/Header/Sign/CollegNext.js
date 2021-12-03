import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import style from 'constants/styles';
import FS from 'lib/utils/normalize';

const CollegeNext = ({ setModal }) => {
  const onClickSignNext = () => {
    setModal(true);
  };

  return (
    <TouchableOpacity onPress={onClickSignNext} style={style.icon}>
      <Text style={styles.text}>건너뛰기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(18),
    color: '#767676',
  },
});

export default CollegeNext;
