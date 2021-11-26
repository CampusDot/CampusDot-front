import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as UserContext } from 'context/User';
import Header from 'components/Header';
import getAchivement, { getLevel } from 'lib/utils/achivements';
import Coupon from 'components/Header/Stamp/Coupon';
import Ranking from 'components/Header/Stamp/Ranking';
import Search from 'components/Header/Home/Search';
import StampStep from 'components/Header/Stamp/StampStep'
import FS from 'lib/utils/normalize';
import style from 'constants/styles';

const Stamp = () => {
  const { state: user } = useContext(UserContext);
  return (
    <View style={style.backwhite}>
      <Header
        title={`${getLevel(user.allStamp)} ${getAchivement(user.allStamp)}`}
        titleStyle={styles.text}
        landings={[<Coupon />]}
        actions={[<Search />, <Ranking />]}
      />
      <StampStep number={user.allStamp} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(20),
    fontWeight: 'bold',
  },
});
export default Stamp;
