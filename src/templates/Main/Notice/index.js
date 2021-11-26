import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as UserContext } from 'context/User';
import style from 'constants/styles';
import Header from 'components/Header';
import NoticeList from 'components/Notice/NoticeList';

const Notice = () => {
  const { state: user, getNotices } = useContext(UserContext);
  useEffect(() => {
    getNotices();
  }, []);
  return (
    <View style={[style.backwhite, styles.center]}>
      <Header title="알림" titleStyle={style.headertitle} />
      <NoticeList data={user.notices} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
export default Notice;
