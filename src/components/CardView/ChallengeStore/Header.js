import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from 'constants/styles';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import RatingStar from 'components/RatingStar';

const Header = ({ rating, review }) => {
  // const reviewcount = review.length;
  const temprating = 4;
  const tempreviewcount = 16;
  return (
    <View style={[styles.container, style.flexRow]}>
      <Text style={styles.textcategory}>리뷰</Text>
      <Text style={[styles.textelement, styles.elementmargin]}>{tempreviewcount}</Text>
      <Text style={[styles.textcategory, styles.categorymargin]}>별점</Text>
      <Text style={[styles.textelement, styles.elementmargin]}>{temprating}</Text>
      <RatingStar number={temprating} size={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40 * SCALE_HEIGHT,
    paddingHorizontal: 10 * SCALE_WIDTH,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
  textcategory: {
    fontSize: FS(12),
    fontWeight: 'bold',
  },
  textelement: {
    fontSize: FS(12),
  },
  elementmargin: {
    marginLeft: 6 * SCALE_WIDTH,
    marginRight: 6 * SCALE_WIDTH,
  },
  categorymargin: {
    marginLeft: 10 * SCALE_WIDTH,
  },
});

export default Header;
