import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { push } from 'lib/utils/navigation';
import timeConverter from 'lib/utils/time';
import ProfileImage from 'widgets/ProfileImage';
import { Context as UserContext } from 'context/User';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import style from 'constants/styles';

const NoticeList = () => {
  const { state: user } = useContext(UserContext);
  const data = user.notices;
  const onClickSection = (id) => {
    push('SelectedList', { id });
  };
  return (
    <FlatList
      style={styles.toppadding}
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        const { NoticingUser, Target, Time } = item;
        const { Name, ProfileImage: profileimg } = NoticingUser;
        const time = timeConverter(Time);
        return (
          <TouchableOpacity
            style={[styles.container, style.flexRow]}
            onPress={() => onClickSection(Target)}
          >
            <ProfileImage image={profileimg} imageStyle={styles.profileImg} />
            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.textname}>
                {Name}
                <Text style={styles.textcontent}>
                  님이 회원님의 리스트를 도전 하기 시작하였습니다.
                  <Text style={styles.texttime}>{`   ${time}`}</Text>
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347 * SCALE_WIDTH,
    height: 44 * SCALE_HEIGHT,
    marginBottom: 11 * SCALE_HEIGHT,
  },
  profileImg: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    backgroundColor: MAIN_COLOR,
    borderRadius: 40 * SCALE_HEIGHT,
  },
  content: {
    width: 286 * SCALE_WIDTH,
    marginLeft: 21 * SCALE_WIDTH,
  },
  textname: {
    fontSize: FS(13),
    fontWeight: 'bold',
  },
  textcontent: {
    fontSize: FS(13),
    fontWeight: 'normal',
  },
  texttime: {
    fontSize: FS(12),
    color: '#808080',
  },
  toppadding: {
    paddingTop: 16 * SCALE_HEIGHT,
  },
});

export default NoticeList;
