import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { useSign } from 'providers/Sign';
import { onClickSingle } from 'lib/utils/ImageEditor';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';

const Photo = () => {
  const { image, setImage } = useSign();
  return (
    <View>
      <Text style={styles.text}>학교 인증</Text>
      <TouchableOpacity style={styles.photoinput} onPress={() => onClickSingle(setImage)}>
        {!image ? (
          <>
            <Text style={styles.textcomment}>학생증 사진을 업로드해주세요</Text>
            <Icon source={require('public/icons/college_photoadd.png')} style={styles.icon} />
          </>
        ) : (
          <Image source={{ uri: image.uri }} style={styles.image} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  photoinput: {
    width: 335 * SCALE_WIDTH,
    height: 181 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    borderWidth: 2 * SCALE_WIDTH,
    borderColor: '#73B979',
    marginLeft: 20 * SCALE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(18),
    marginTop: 28 * SCALE_HEIGHT,
    marginLeft: 30 * SCALE_WIDTH,
  },
  picker: {
    borderColor: '#73B979',
    borderBottomWidth: 2,
    width: 335 * SCALE_WIDTH,
  },
  textcomment: {
    fontSize: FS(16),
    color: '#A1A1A1',
  },
  icon: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    marginTop: 16 * SCALE_HEIGHT,
  },
  image: {
    width: 335 * SCALE_WIDTH,
    height: 181 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
  },
});

export default Photo;
