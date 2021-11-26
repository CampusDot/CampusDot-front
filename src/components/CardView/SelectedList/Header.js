import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from 'constants/styles';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';

const Header = ({ info }) => {
  const { name, vicinity } = info;
  return (
    <View style={[styles.container, style.flexRow]}>
      <Text style={styles.name}>{name}</Text>
      <Icon source={require('public/icons/location.png')} style={styles.icon} />
      <Text style={styles.location}>{vicinity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40 * SCALE_HEIGHT,
    paddingHorizontal: 10 * SCALE_WIDTH,
  },
  name: {
    fontSize: FS(14),
    fontWeight: 'bold',
  },
  icon: {
    width: 16 * SCALE_WIDTH,
    height: 16 * SCALE_WIDTH,
    marginLeft: 4 * SCALE_WIDTH,
  },
  location: {
    fontSize: FS(12),
    color: '#111111',
  },
});

export default Header;
