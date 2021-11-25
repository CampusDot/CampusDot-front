import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { push } from 'lib/utils/navigation';
import storeImage from 'lib/utils/storeImage';
import State from './State';

const Restaurant = ({ information }) => {
  const { storeInfo, storeCount, completeCount } = information;
  const { title, photo, _id: id } = storeInfo;
  return (
    <TouchableOpacity onPress={() => push('SelectedList', { id })}>
      <State progress={(completeCount / storeCount) * 100}>
        <View
          style={{
            transform: [{ rotate: '45deg' }],
          }}
        >
          <Image style={styles.img} source={{ uri: storeImage(photo[0].photo_reference) }} />
          <View style={styles.img} />
        </View>
      </State>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 103,
    height: 103,
    borderRadius: 103,
    position: 'absolute',
    bottom: -51.5,
    left: 1.5,
    // marginRight: 8,
    // marginLeft: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default Restaurant;
