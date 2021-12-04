import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from 'components/Header';
import ReviewWriteButton from 'components/Header/Create/ReviewWriteButton';
import style from 'constants/styles';
import Photo from 'components/Create/ReviewInput/Photo';
import ReviewText from 'components/Create/ReviewInput/ReviewText';
import Rating from 'components/Create/ReviewInput/Rating';

const CreateReview = ({ id, storeListId }) => {
  return (
    <View style={style.backwhite}>
      <Header
        title="리뷰 작성"
        back
        titleStyle={style.headertitle}
        actions={[<ReviewWriteButton id={id} storeListId={storeListId} />]}
      />
      <View style={styles.aligncenter}>
        <Rating />
        <ReviewText />
        <Photo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aligncenter: {
    alignItems: 'center',
  },
});
export default CreateReview;
