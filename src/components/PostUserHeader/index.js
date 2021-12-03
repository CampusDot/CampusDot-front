import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfileImage from 'widgets/ProfileImage';
import style from 'constants/styles';
import getAchivement from 'lib/utils/achivements';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { SUB_COLOR2 } from 'constants/colors';

const Header = ({ PostUser }) => {
  const { Name, ProfileImage: profileImg, AllStamp } = PostUser;
  return (
    <View style={[styles.container, style.flexRow]}>
      <ProfileImage imageStyle={styles.profileImg} image={profileImg} />
      <Text style={styles.name}>{Name}</Text>
      <View style={styles.box}>
        <Text style={styles.achivement}>{getAchivement(AllStamp)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40 * SCALE_HEIGHT,
  },
  profileImg: {
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_WIDTH,
    borderRadius: 24 * SCALE_WIDTH,
    marginLeft: 12 * SCALE_WIDTH,
  },
  name: {
    fontSize: FS(12),
    marginLeft: 6 * SCALE_WIDTH,
    marginRight: 4 * SCALE_WIDTH,
  },
  box: {
    backgroundColor: 'rgba(95, 175, 102, 0.19)',
    borderRadius: 10 * SCALE_HEIGHT,
    paddingHorizontal: 8 * SCALE_WIDTH,
    paddingVertical: 2 * SCALE_HEIGHT,
  },
  achivement: {
    fontSize: FS(8),
    color: SUB_COLOR2,
    fontWeight: 'bold',
  },
});

export default Header;
