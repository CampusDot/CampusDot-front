import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as UserContext } from 'context/User';
import ProfileImage from 'widgets/ProfileImage';
import style from 'constants/styles';
import { MAIN_COLOR } from 'constants/colors';

import getAchivement, { getLevel } from 'lib/utils/achivements';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/Normalize';

const Profile = () => {
  const { state: user } = useContext(UserContext);
  return (
    <View style={[styles.container, style.flexRow, style.space_between, style.headershadow]}>
      <View style={style.flexRow}>
        <ProfileImage image={user.profileImage} imageStyle={styles.profileImg} />
        <View style={styles.userName}>
          <Text style={styles.textName}>{user.name}</Text>
          <Text style={styles.textLevel}>
            {getLevel(user.allStamp)} {getAchivement(user.allStamp)}
          </Text>
        </View>
      </View>
      <View style={style.flexRow}>
        <View style={styles.stampBox}>
          <Text style={styles.textStamp}>전체 도장</Text>
          <Text style={styles.textStampNum}>{user.allStamp}</Text>
        </View>
        <View style={[styles.stampBox, styles.stampGap]}>
          <Text style={styles.textStamp}>유효 도장</Text>
          <Text style={styles.textStampNum}>{user.allStamp - user.usedStamp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    paddingTop: 20 * SCALE_HEIGHT,
  },
  profileImg: {
    width: 65 * SCALE_WIDTH,
    height: 65 * SCALE_WIDTH,
    backgroundColor: MAIN_COLOR,
    borderRadius: 65 * SCALE_HEIGHT,
  },
  stampBox: {
    alignItems: 'center',
  },
  userName: {
    paddingLeft: 20 * SCALE_WIDTH,
    height: 65 * SCALE_WIDTH,
    justifyContent: 'center',
  },
  textName: {
    fontSize: FS(18),
    fontWeight: 'bold',
    marginBottom: 9 * SCALE_HEIGHT,
  },
  textLevel: {
    fontSize: FS(14),
    color: '#7BB57F',
  },
  textStamp: {
    fontSize: FS(14),
  },
  textStampNum: {
    marginTop: 8 * SCALE_HEIGHT,
    fontSize: FS(14),
    color: '#767676',
    fontWeight: 'bold',
  },
  stampGap: {
    marginLeft: 20 * SCALE_WIDTH,
  },
});
export default Profile;
