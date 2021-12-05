import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'widgets/Icon';
import style from 'constants/styles';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Header = ({ name, vicinity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={style.flexRow}>
        <Icon source={require('public/icons/location.png')} style={styles.icon} />
        <Text style={styles.location}>{vicinity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5 * SCALE_WIDTH,
    paddingLeft: 7 * SCALE_WIDTH,
  },
  name: {
    fontSize: FS(14),
    fontWeight: 'bold',
  },
  icon: {
    width: 16 * SCALE_WIDTH,
    height: 16 * SCALE_WIDTH,
    marginTop: 5 * SCALE_HEIGHT,
  },
  location: {
    fontSize: FS(12),
    color: '#111111',
    marginTop: 5 * SCALE_HEIGHT,
  },
});

export default Header;
