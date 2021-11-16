import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from 'constants/styles';
import { MAIN_COLOR } from 'constants/colors';

const Header = ({ Title, address }) => {
  return (
    <View style={[styles.container, style.flexRow]}>
      <Text>{Title}</Text>
      <Text>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    backgroundColor: MAIN_COLOR,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default Header;
