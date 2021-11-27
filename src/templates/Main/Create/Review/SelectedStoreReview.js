import React, { useContext, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import CardView from 'components/CardView';
import LoadingIndicator from 'components/LoadingIndicator';
import SelectedStoreInfo from 'components/Home/SelectedStoreInfo';
import Header from 'components/CardView/StoreReview/Header';
import TitleHeader from 'components/Header';
import Footer from 'components/CardView/SelectedList/Footer';
import style from 'constants/styles';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { push } from 'lib/utils/navigation';

const SelectedStoreReview = ({ id }) => {
  const { state, getSelectedReview } = useContext(ReviewContext);
  const onClickPostReview = () => {
    push('CreateReview', { id });
  };

  useEffect(() => {
    getSelectedReview({ id });
  }, []);
  return (
    <View style={[style.backwhite]}>
      <TitleHeader back title="리뷰" titleStyle={style.headertitle} />
      {state.reviewLists ? (
        <>
          <ScrollView
            style={[styles.padding, styles.scrollview]}
            showsVerticalScrollIndicator={false}
          >
            <SelectedStoreInfo />
            <View style={styles.paddingtop}>
              {state.reviewLists.map((review) => {
                const { Content, Photo, PostUser, Rating } = review;
                console.log(review);
                return (
                  <CardView
                    header={<Header PostUser={PostUser} number={Rating} />}
                    footer={<Footer comment={Content} />}
                    photo={Photo && Photo}
                    review
                  />
                );
              })}
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.review} onPress={onClickPostReview}>
            <Text style={styles.textreview}>리뷰쓰기</Text>
          </TouchableOpacity>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    width: 70 * SCALE_WIDTH,
    height: 70 * SCALE_WIDTH,
    borderRadius: 70 * SCALE_HEIGHT,
    backgroundColor: '#7BB57F',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30 * SCALE_WIDTH,
    bottom: 90 * SCALE_HEIGHT,
    opacity: 0.9,
  },
  padding: {
    paddingHorizontal: 14 * SCALE_WIDTH,
  },
  scrollview: {
    paddingTop: 14 * SCALE_HEIGHT,
  },
  paddingtop: {
    paddingTop: 21 * SCALE_HEIGHT,
  },
  textreview: {
    fontSize: FS(14),
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SelectedStoreReview;
