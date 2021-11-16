import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import style from 'constants/styles';

const Information = () => {
  return (
    <>
      <View style={[style.flexRow, style.space_between]}>
        <Text>제목</Text>
        <TouchableOpacity style={styles.icon} />
      </View>
      <Text>내용</Text>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 76,
    height: 27,
    borderWidth: 1,
  },
});

export default Information;
