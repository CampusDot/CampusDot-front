import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RatingStar from 'components/RatingStar';
import { Context as ReviewContext } from 'context/Review';

import style from 'constants/styles';
import Icon from 'widgets/Icon';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

const SelectedStoreInfo = () => {
  const { state } = useContext(ReviewContext);
  const Reviewlen = state.reviewLists.length;
  const { Rating, Information } = state.currentStore[0];
  const { name, vicinity } = Information;
  return (
    <View style={style.flexRow}>
      <View style={[styles.container]}>
        <View style={style.flexRow}>
          <Text style={styles.textname}>{name}</Text>
          <RatingStar number={Rating} size={14} />
        </View>
        <View style={style.flexRow}>
          <Icon source={require('public/icons/selectedstore_location.png')} style={styles.icon} />
          <Text>{vicinity}</Text>
        </View>
      </View>
      <View style={style.flexRow}>
        <Text style={styles.textcategory}>별점</Text>
        <Text style={styles.textelement}>{Rating}</Text>
        <Text style={styles.textcategory}>리뷰</Text>
        <Text style={styles.textelement}>{Reviewlen}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 53 * SCALE_HEIGHT,
    width: 250 * SCALE_WIDTH,
    justifyContent: 'space-evenly',
  },
  textname: {
    fontSize: FS(18),
    fontWeight: 'bold',
    marginRight: 7 * SCALE_WIDTH,
  },
  icon: {
    width: 17 * SCALE_WIDTH,
    height: 17 * SCALE_HEIGHT,
  },
  textaddress: {
    fontSize: FS(12),
    marginLeft: 2 * SCALE_WIDTH,
  },
  textcategory: {
    fontSize: FS(12),
    fontWeight: 'bold',
  },
  textelement: {
    fontSize: FS(12),
    fontWeight: 'normal',
    marginRight: 10 * SCALE_WIDTH,
    marginLeft: 5 * SCALE_WIDTH,
  },
});

export default SelectedStoreInfo;
