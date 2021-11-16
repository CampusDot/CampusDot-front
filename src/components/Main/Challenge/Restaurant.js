import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { push } from 'lib/utils/navigation';
import State from './State';

const Restaurant = ({ information }) => {
  const { Name, Photo, percent } = information;
  return (
    <TouchableOpacity onPress={() => push('SelectedList')}>
      <State progress={percent}>
        <View
          style={{
            transform: [{ rotate: '45deg' }],
          }}
        >
          <View style={styles.img} />
        </View>
      </State>
      <Text style={styles.text}>{Name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 103,
    borderWidth: 1,
    // marginRight: 8,
    // marginLeft: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default Restaurant;
