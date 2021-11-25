import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from 'constants/styles';

const Footer = ({ content, rating }) => {
  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <Text>{content}</Text>
      <Text>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});

export default Footer;
