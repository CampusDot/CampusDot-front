import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { push } from 'lib/utils/navigation';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

const ListAddButton = () => {
  const onPressAdd = () => {
    push('SearchStore');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>식당 목록</Text>
      <TouchableOpacity onPress={onPressAdd} style={styles.button}>
        <Text style={styles.plus}>+ 식당 추가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20 * SCALE_WIDTH,
  },
  title: {
    fontSize: FS(16),
    color: '#191919',
    marginTop: 32 * SCALE_HEIGHT,
  },
  button: {
    width: 335 * SCALE_WIDTH,
    height: 49 * SCALE_HEIGHT,
    borderRadius: 12 * SCALE_HEIGHT,
    borderWidth: 1 * SCALE_HEIGHT,
    borderColor: 'rgba(153,153,153,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26 * SCALE_HEIGHT,
    marginBottom: 12 * SCALE_HEIGHT,
  },
  plus: {
    fontSize: FS(14),
    color: '#7BB57F',
  },
});

export default ListAddButton;
