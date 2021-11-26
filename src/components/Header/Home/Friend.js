import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { SUB_COLOR, SUB_COLOR2 } from 'constants/colors';

const Friend = () => {
  const onClickButton = () => {
    navigate('FriendCollege');
  };

  return (
    <TouchableOpacity onPress={onClickButton} style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>친구네</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 46 * SCALE_WIDTH,
    height: 40 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 46 * SCALE_WIDTH,
    height: 20 * SCALE_HEIGHT,
    borderWidth: 1.6 * SCALE_HEIGHT,
    borderColor: SUB_COLOR,
    borderRadius: 4 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FS(12),
    color: SUB_COLOR2,
  },
});
export default Friend;
