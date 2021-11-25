import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as UserContext } from 'context/User';
import ProfileImage from 'widgets/ProfileImage';
import style from 'constants/styles';
import getAchivement, { getLevel } from 'lib/utils/achivements';

const Profile = () => {
  const { state: user } = useContext(UserContext);

  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <View style={style.flexRow}>
        <ProfileImage image={user.profileImage} imageStyle={styles.profileImg} />
        <View>
          <Text>{user.name}</Text>
          <Text>
            {getLevel(user.allStamp)} {getAchivement(user.allStamp)}
          </Text>
        </View>
      </View>
      <View style={style.flexRow}>
        <View style={styles.stampBox}>
          <Text>전체 도장</Text>
          <Text>{user.allStamp}</Text>
        </View>
        <View style={styles.stampBox}>
          <Text>유효 도장</Text>
          <Text>{user.allStamp - user.usedStamp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  profileImg: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderRadius: 65,
  },
  stampBox: {
    alignItems: 'center',
  },
});
export default Profile;
