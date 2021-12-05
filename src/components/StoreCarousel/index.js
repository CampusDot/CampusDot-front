import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import StoreImage from 'widgets/StoreImage';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import isCustomImage from 'lib/utils/customImage';

const StoreCarousel = ({ photo, type }) => {
  const [idx, setIdx] = useState(1);

  const onScroll = (e) => {
    setIdx(Math.ceil(e.nativeEvent.contentOffset.x / (347 * SCALE_WIDTH) + 1));
  };

  return (
    <>
      <FlatList
        data={photo}
        onScroll={(e) => onScroll(e)}
        keyExtractor={() => Math.random()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        snapToInterval={375 * SCALE_WIDTH}
        decelerationRate={0}
        scrollEventThrottle={16}
        renderItem={({ item }) => {
          const custom = isCustomImage(item);
          return (
            <>
              {type === 'review' || custom ? (
                <Image source={{ uri: item }} style={styles.storeImg} />
              ) : (
                <StoreImage image={item} imageStyle={styles.storeImg} />
              )}
            </>
          );
        }}
      />
      <View style={styles.box}>
        <Text style={styles.text}>
          {idx}/{photo.length}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  storeImg: {
    height: 334 * SCALE_HEIGHT,
    width: 375 * SCALE_WIDTH,
    marginTop: 7 * SCALE_HEIGHT,
  },
  box: {
    width: 30 * SCALE_WIDTH,
    height: 20 * SCALE_HEIGHT,
    borderRadius: 10 * SCALE_HEIGHT,
    backgroundColor: '#767676',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 52 * SCALE_HEIGHT,
    right: 12 * SCALE_WIDTH,
  },
  text: {
    fontSize: FS(12),
    color: '#fff',
  },
});

export default StoreCarousel;
