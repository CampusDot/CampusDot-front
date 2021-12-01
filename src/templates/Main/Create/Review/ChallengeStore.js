import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import LoadingIndicator from 'components/LoadingIndicator';
import SearchBar from 'components/SearchBar';
import style from 'constants/styles';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { useSearch } from 'providers/Search';
import CardView from 'components/CardView';
import Header from 'components/CardView/ChallengeStore/Header';
import Footer from 'components/CardView/ChallengeStore/Footer';
import isCustomImage from 'lib/utils/customImage';

const ChallengeStore = () => {
  const [storeLists, setStoreLists] = useState(null);
  const { getReviewStore, state } = useContext(ReviewContext);
  const { text } = useSearch();

  useEffect(() => {
    getReviewStore();
  }, []);

  useEffect(() => {
    setStoreLists(state.storeLists);
  }, [state.storeLists]);

  useEffect(() => {
    if (storeLists) {
      setStoreLists(state.storeLists.filter((store) => store.Information.name.includes(text)));
    }
    if (text === '') {
      setStoreLists(state.storeLists);
    }
  }, [text]);

  return (
    <View style={[style.backwhite]}>
      <SearchBar placeholder="리뷰를 작성할 식당 이름을 검색해주세요" />
      {storeLists ? (
        <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
          {storeLists.map(({ Information, Review, Rating, _id: id, storeListId }) => {
            const photo = isCustomImage(Information.photo)
              ? Information.photo
              : [Information.photo];
            return (
              <View key={Math.random()} style={styles.marginBottom}>
                <CardView
                  custom={isCustomImage(Information.photo)}
                  header={<Header rating={Rating} review={Review} />}
                  footer={
                    <Footer
                      name={Information.name}
                      address={Information.vicinity}
                      id={id}
                      storeListId={storeListId}
                    />
                  }
                  photo={photo}
                />
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    paddingTop: 16 * SCALE_HEIGHT,
  },
  marginBottom: {
    marginBottom: 14 * SCALE_HEIGHT,
  },
});

export default ChallengeStore;
