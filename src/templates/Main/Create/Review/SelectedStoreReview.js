import React, { useContext, useEffect } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import ReviewCard from 'components/ReviewCard';
import LoadingIndicator from 'components/LoadingIndicator';
import SelectedStoreInfo from 'components/Main/SelectedStoreInfo';
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
    <>
      {state.reviewLists ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SelectedStoreInfo Name="zzz" Address="zz" Rating="3" />
            {state.reviewLists.map((review) => {
              const { Content, Photo, PostUser } = review;
              const information = {
                content: Content,
                photo: Photo,
                postUser: PostUser,
              };
              return <ReviewCard key={review._id} information={information} />;
            })}
          </ScrollView>
          <TouchableOpacity style={styles.review} onPress={onClickPostReview}>
            <Text>리뷰 쓰기</Text>
          </TouchableOpacity>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  review: {
    width: 86,
    height: 86,
    borderRadius: 86,
    borderWidth: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
  },
});

export default SelectedStoreReview;
