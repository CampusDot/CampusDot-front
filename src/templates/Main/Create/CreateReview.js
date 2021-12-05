import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from 'components/Header';
import ReviewWriteButton from 'components/Header/Create/ReviewWriteButton';
import style from 'constants/styles';
import Photo from 'components/Create/ReviewInput/Photo';
import ReviewText from 'components/Create/ReviewInput/ReviewText';
import Filter from 'components/Create/Filter';
import { SCALE_WIDTH } from 'lib/utils/normalize';

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
        <Photo />
        <ReviewText />
        <Filter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aligncenter: {
    paddingHorizontal: 20 * SCALE_WIDTH,
  },
});
export default CreateReview;
