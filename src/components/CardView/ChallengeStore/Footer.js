import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import style from 'constants/styles';
import Icon from 'widgets/Icon';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { push } from 'lib/utils/navigation';

const Footer = ({ name, address, id, storeListId }) => {
  const onClickPostReview = () => {
    push('CreateReview', { id, storeListId, type: 'Home' });
  };
  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <View style={styles.info}>
        <Text style={styles.textname}>{name}</Text>
        <View style={[style.flexRow, styles.location]}>
          <Icon source={require('public/icons/location.png')} style={styles.icon} />
          <Text>{address}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onClickPostReview}>
        <Icon source={require('public/icons/review_write.png')} style={styles.reviewicon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 59 * SCALE_HEIGHT,
    paddingHorizontal: 12 * SCALE_WIDTH,
    paddingTop: 9 * SCALE_HEIGHT,
    paddingBottom: 11 * SCALE_HEIGHT,
  },
  profileImg: {
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_WIDTH,
    borderRadius: 24 * SCALE_HEIGHT,
    borderWidth: 1,
  },
  info: {
    width: 250 * SCALE_WIDTH,
  },
  location: {
    marginTop: 5 * SCALE_HEIGHT,
  },
  icon: {
    width: 16 * SCALE_WIDTH,
    height: 16 * SCALE_WIDTH,
  },
  textname: {
    fontSize: FS(14),
    fontWeight: 'bold',
  },
  reviewicon: {
    width: 72 * SCALE_WIDTH,
    height: 25 * SCALE_HEIGHT,
    backgroundColor: 'white',
  },
});

export default Footer;
