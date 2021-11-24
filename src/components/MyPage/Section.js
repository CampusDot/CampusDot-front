import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { push } from 'lib/utils/navigation';

const menuLists = {
  '먹어 볼래': 0,
  '내가 쓴 리스트': 1,
  '다녀 온 가게': 2,
  설정: 3,
};

const Section = ({ title }) => {
  const onClickSection = () => {
    push('SelectedSection', { menu: menuLists[title] });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onClickSection}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347,
    height: 77,
    borderWidth: 1,
  },
});

export default Section;
