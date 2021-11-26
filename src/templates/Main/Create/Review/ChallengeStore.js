import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import LoadingIndicator from 'components/LoadingIndicator';
import SearchBar from 'components/SearchBar';
import style from 'constants/styles';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { useSearch } from 'providers/Search';
import CardView from 'components/CardView';
import Header from 'components/CardView/ChallengeStore/Header';
import Footer from 'components/CardView/ChallengeStore/Footer';
import { push } from 'lib/utils/navigation';

const ChallengeStore = () => {
  const [storeLists, setStoreLists] = useState(null);
  const { getReviewStore, state } = useContext(ReviewContext);
  const { text } = useSearch();
  const onClickCard = (id) => {
    push('SelectedStore', { id });
  };
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
          {storeLists.map(({ Information, Review, Rating, _id: id }) => {
            return (
              <TouchableOpacity id={id} onPress={() => onClickCard(id)}>
                <CardView
                  header={<Header rating={Rating} review={Review} />}
                  footer={<Footer name={Information.name} address={Information.vicinity} />}
                  photo={Information.photos && Information.photos[0]}
                />
              </TouchableOpacity>
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
});

export default ChallengeStore;
