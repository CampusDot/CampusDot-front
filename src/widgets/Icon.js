import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Icon = () => {
  return (
    <View style={styles.container}>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderWidth: 1,
  },
});
export default Icon;
