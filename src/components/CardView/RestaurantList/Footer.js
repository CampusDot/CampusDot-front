import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import style from 'constants/styles';
import { SUB_COLOR } from 'constants/colors';
import { push } from 'lib/utils/navigation';

const Footer = ({ title, comment, id }) => {
  const onClickListCard = () => {
    push('SelectedList', { id });
  };

  return (
    <View style={[style.flexRow, style.space_between, styles.container]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {comment && <Text style={styles.comment}>{comment}</Text>}
      </View>
      <TouchableOpacity style={styles.box} onPress={onClickListCard}>
        <Text style={styles.text}>+ 먹어 볼래!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12 * SCALE_WIDTH,
    paddingVertical: 12 * SCALE_HEIGHT,
  },
  title: {
    fontSize: FS(14),
    fontWeight: 'bold',
  },
  comment: {
    fontSize: FS(12),
    marginTop: 5 * SCALE_HEIGHT,
  },
  box: {
    width: 76 * SCALE_WIDTH,
    height: 25 * SCALE_HEIGHT,
    borderRadius: 4 * SCALE_HEIGHT,
    borderWidth: 1.4 * SCALE_HEIGHT,
    borderColor: SUB_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FS(12),
    color: SUB_COLOR,
  },
});

export default Footer;
