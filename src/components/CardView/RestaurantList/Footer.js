import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import style from 'constants/styles';
import { SUB_COLOR } from 'constants/colors';
import { push } from 'lib/utils/navigation';
import MoveText from 'components/MoveText';

const Footer = ({ title, comment, id }) => {
  const onClickListCard = () => {
    push('SelectedList', { id });
  };

  return (
    <View style={[style.flexRow, style.space_between, styles.container]}>
      <View>
        <MoveText text={title} textStyles={styles.title} container={styles.moveContainer} />
        {comment && (
          <MoveText text={comment} textStyles={styles.comment} container={styles.moveContainer} />
        )}
      </View>
      <TouchableOpacity style={styles.box} onPress={onClickListCard}>
        <Text style={styles.text}>먹어 볼래!</Text>
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
  moveContainer: {
    borderWidth: 1,
    width: 241 * SCALE_WIDTH,
  },
});

export default Footer;
