import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import style from 'constants/styles';

const Footer = ({ title, comment }) => {
  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <View>
        <Text>{title}</Text>
        <Text>{comment}</Text>
      </View>
      <TouchableOpacity style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 59,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
  icon: {
    width: 40,
    height: 40,
    borderWidth: 1,
  },
});

export default Footer;
