import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfileImage from 'widgets/ProfileImage';
import style from 'constants/styles';

const Header = ({ PostUser }) => {
  // const { Name } = PostUser;
  return (
    <View style={[styles.container, style.flexRow]}>
      <ProfileImage imageStyle={styles.profileImg} />
      <Text>zz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default Header;
