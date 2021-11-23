import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Invisible = ({ stamp }) => {
  const need = 3 - stamp;
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>도장 {need}개가 더 필요해요!</Text>
      </View>
      <Text>아직 친구네 학교를 {'\n'} 구경할 수 없어요</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#707070',
  },
});
export default Invisible;
