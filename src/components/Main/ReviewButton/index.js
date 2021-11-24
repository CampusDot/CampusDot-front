import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MAIN_COLOR } from 'constants/colors';
import { useReviewCreate } from 'providers/ReviewCreate';

const ReviewButton = ({ Store, setIsWrite }) => {
  const { setStore } = useReviewCreate();
  const onPressWrite = () => {
    setIsWrite(true);
    setStore(Store);
  };
  return (
    <TouchableOpacity onPress={onPressWrite} style={styles.button}>
      <Text>리뷰 작성하기</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: MAIN_COLOR,
    position: 'absolute',
    top: 650,
    left: 270,
  },
});

export default ReviewButton;
