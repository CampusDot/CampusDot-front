import React from 'react';
import { View, StyleSheet, Platform, StatusBar as RnStatusBar } from 'react-native';
import { MAIN_COLOR } from 'constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const StatusBarHeight = Platform.select({
  ios: 44,
  android: RnStatusBar.currentHeight,
  default: 0,
});

const StatusBar = () => {
  return <View style={styles.container} />;
};

export const AuthStatusBar = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#FFDE6E', '#C4DD60', '#5FAF66']}
      style={styles.authContainer}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    height: StatusBarHeight,
    backgroundColor: MAIN_COLOR,
  },
  authContainer: {
    height: StatusBarHeight,
  },
});

export default StatusBar;
