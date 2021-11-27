import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { push } from 'lib/utils/navigation';
import storeImage from 'lib/utils/storeImage';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import State from './State';

const Restaurant = ({ information }) => {
  const { storeInfo, storeCount, completeCount } = information;
  const { title, photo, _id: id } = storeInfo;

  const onClickChallnege = () => {
    push('SelectedList', { id });
  };
  return (
    <TouchableOpacity onPress={onClickChallnege} style={styles.container}>
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
  container: {
    marginRight: 20 * SCALE_WIDTH,
    marginTop: 14 * SCALE_HEIGHT,
  },
  img: {
    width: 103 * SCALE_WIDTH,
    height: 103 * SCALE_WIDTH,
    borderRadius: 103 * SCALE_WIDTH,
    position: 'absolute',
    bottom: -51.5 * SCALE_HEIGHT,
    left: 4 * SCALE_WIDTH,
  },
  text: {
    textAlign: 'center',
    marginTop: 10 * SCALE_HEIGHT,
    fontSize: FS(14),
  },
});

export default Restaurant;
