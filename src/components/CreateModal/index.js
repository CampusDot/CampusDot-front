import React from 'react';
import { View, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { goBack, navigate } from 'lib/utils/navigation';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import Icon from 'widgets/Icon';
import style from 'constants/styles';

const CreateModal = () => {
  const onClickReview = () => {
    goBack();
    navigate('SearchStore');
  };

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.7)' }]}
        onPress={goBack}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={onClickReview} style={[styles.box, style.flexRow]}>
          <Icon source={require('public/icons/create_review.png')} style={style.icons} />
          <Text style={styles.text}>리뷰 작성하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0)',
    alignItems: 'center',
    paddingTop: 80 * SCALE_HEIGHT,
  },
  box: {
    width: 345 * SCALE_WIDTH,
    height: 50 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    backgroundColor: MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(16),
    color: '#262626',
    marginLeft: 10 * SCALE_WIDTH,
  },
});

export default CreateModal;
