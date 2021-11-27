import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as UserContext } from 'context/User';
import Header from 'components/Header';
import getAchivement, { getLevel } from 'lib/utils/achivements';
import Coupon from 'components/Header/Stamp/Coupon';
import Ranking from 'components/Header/Stamp/Ranking';
import StampStep from 'components/Header/Stamp/StampStep';
import FS from 'lib/utils/normalize';
import style from 'constants/styles';

const Stamp = () => {
  const { state: user } = useContext(UserContext);
  return (
    <View style={style.backwhite}>
      <Header
        title="도장 모으기"
        titleStyle={styles.text}
        landings={[<Coupon />]}
        actions={[<Ranking />]}
      />
      <View style={styles.backblack}>
        <StampStep number={user.allStamp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(20),
  },
  backblack: {
    flex: 1,
    backgroundColor: '#292828',
  },
});
export default Stamp;
