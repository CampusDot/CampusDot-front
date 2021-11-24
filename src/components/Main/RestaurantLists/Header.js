import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfileImage from 'widgets/ProfileImage';
import style from 'constants/styles';
import getAchivement from 'lib/utils/achivements';

const Header = ({ PostUser }) => {
  const { Name, ProfileImage: profileImg, AllStamp } = PostUser;
  return (
    <View style={[styles.container, style.flexRow]}>
      <ProfileImage imageStyle={styles.profileImg} image={profileImg} />
      <Text>{Name}</Text>
      <Text>{getAchivement(AllStamp)}</Text>
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
