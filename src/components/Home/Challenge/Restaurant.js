import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { push } from 'lib/utils/navigation';
import storeImage from 'lib/utils/storeImage';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import isCustomImage from 'lib/utils/customImage';
import State from './State';

const Restaurant = ({ information }) => {
  const { storeInfo, storeCount, completeCount } = information;
  const { title, photo, _id: id } = storeInfo;

  const onClickChallnege = () => {
    push('SelectedList', { id });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClickChallnege} style={styles.box}>
        <State progress={(completeCount / storeCount) * 100}>
          <View
            style={{
              transform: [{ rotate: '45deg' }],
            }}
          >
            <Image
              style={styles.img}
              source={{ uri: isCustomImage(photo) ? photo : storeImage(photo) }}
              resizeMode="stretch"
            />
            <View style={styles.img} />
          </View>
        </State>
        <Text style={styles.text} numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 134 * SCALE_WIDTH,
    height: 167 * SCALE_HEIGHT,
    marginRight: 20 * SCALE_WIDTH,
    marginTop: 14 * SCALE_HEIGHT,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12 * SCALE_HEIGHT,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      height: 3 * SCALE_HEIGHT,
      width: 0,
    },
    shadowRadius: 6 * SCALE_HEIGHT,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  box: {
    marginTop: 10 * SCALE_HEIGHT,
  },
  img: {
    width: 98 * SCALE_WIDTH,
    height: 98 * SCALE_WIDTH,
    borderRadius: 98 * SCALE_WIDTH,
    position: 'absolute',
    bottom: -49 * SCALE_HEIGHT,
    left: 5 * SCALE_WIDTH,
  },
  text: {
    textAlign: 'center',
    marginTop: 10 * SCALE_HEIGHT,
    fontSize: FS(14),
    width: 120 * SCALE_WIDTH,
  },
});

export default Restaurant;
