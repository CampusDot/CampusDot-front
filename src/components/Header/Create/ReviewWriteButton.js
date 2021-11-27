import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useReviewCreate } from 'providers/ReviewCreate';
import style from 'constants/styles';
import FS from 'lib/utils/normalize';

const ReviewWriteButton = ({ id }) => {
  const { onClickPostReview } = useReviewCreate();

  return (
    <TouchableOpacity
      onPress={() => {
        onClickPostReview(id);
      }}
      style={style.icon}
    >
      <Text style={styles.text}>작성</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(18),
    color: '#767676',
  },
});

export default ReviewWriteButton;
