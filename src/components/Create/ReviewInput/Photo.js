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
      <TouchableOpacity style={styles.image} onPress={() => onClickMultiple(setImages)}>
        {images.length === 0 ? (
          <>
            <Icon source={require('public/icons/photo_add.png')} style={styles.icon} />
            <Text style={styles.textcomment}>사진 추가하기</Text>
          </>
        ) : (
          <Image source={{ uri: images[0].uri }} style={styles.image} />
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 335 * SCALE_WIDTH,
    marginTop: 16 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(16),
    marginBottom: 16 * SCALE_HEIGHT,
  },
  image: {
    width: 335 * SCALE_WIDTH,
    height: 212 * SCALE_HEIGHT,
    borderRadius: 23 * SCALE_HEIGHT,
    borderColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1 * SCALE_HEIGHT,
  },
  icon: {
    width: 10 * SCALE_WIDTH,
    height: 10 * SCALE_WIDTH,
  },
  textcomment: {
    fontSize: FS(14),
    color: '#CE476B',
  },
});
export default Photo;
