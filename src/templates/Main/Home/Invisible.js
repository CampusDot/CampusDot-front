import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';
import Header from 'components/Header';
import { SUB_COLOR } from 'constants/colors';

const Invisible = ({ stamp }) => {
  const need = 3 - stamp;
  return (
    <View style={styles.container}>
      <Header back />
      <View style={styles.center}>
        <View style={styles.box}>
          <Text style={styles.stampText}>도장 {need}개가 더 필요해요!</Text>
        </View>
        <Text style={styles.text}>아직 친구네 학교를</Text>
        <Text style={styles.text}>구경할 수 없어요</Text>
        <Icon source={require('public/icons/lock.png')} style={styles.lock} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: SUB_COLOR,
    paddingHorizontal: 8 * SCALE_WIDTH,
    paddingVertical: 5 * SCALE_HEIGHT,
    borderRadius: 4 * SCALE_HEIGHT,
    marginBottom: 10 * SCALE_HEIGHT,
  },
  stampText: {
    color: '#ffffff',
    fontSize: FS(14),
  },
  text: {
    fontSize: FS(20),
    color: '#767676',
    lineHeight: 30 * SCALE_HEIGHT,
  },
  lock: {
    width: 25 * SCALE_WIDTH,
    height: 28 * SCALE_HEIGHT,
    marginTop: 17 * SCALE_HEIGHT,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 60 * SCALE_HEIGHT,
  },
});

export default Invisible;
