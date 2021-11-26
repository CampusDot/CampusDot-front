import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';
import { onClickMultiple } from 'lib/utils/ImageEditor';
import Icon from 'widgets/Icon';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Photo = () => {
  const { setImages, images } = useReviewCreate();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>사진</Text>
      {images.length === 0 ? (
        <TouchableOpacity style={styles.image} onPress={() => onClickMultiple(setImages)}>
          <Icon source={require('public/icons/photo_add.png')} style={styles.icon} />
          <Text style={styles.textcomment}>사진 추가하기</Text>
        </TouchableOpacity>
      ) : (
        <Image source={{ uri: images[0].uri }} style={styles.image} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 335 * SCALE_WIDTH,
    height: 260 * SCALE_HEIGHT,
    justifyContent: 'space-between',
    marginTop: 42 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(16),
  },
  image: {
    width: 335 * SCALE_WIDTH,
    height: 212 * SCALE_HEIGHT,
    borderRadius: 23 * SCALE_HEIGHT,
    borderWidth: 1 * SCALE_WIDTH,
    borderColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 10 * SCALE_WIDTH,
    height: 10 * SCALE_WIDTH,
  },
  textcomment: {
    fontSize: FS(14),
    color: '#7BB57F',
  },
});
export default Photo;
