import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { push } from 'lib/utils/navigation';

const ListAddButton = () => {
  const onPressAdd = () => {
    push('SearchStore');
  };

  return (
    <TouchableOpacity onPress={onPressAdd} style={styles.button}>
      <Text>식당 추가하기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'yellow',
  },
});

export default ListAddButton;
