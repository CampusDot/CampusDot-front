import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Context as ReviewContext } from 'context/Review';
import LoadingIndicator from 'components/LoadingIndicator';
import RestaurantCardView from 'components/RestaurantCardView';
import SearchBar from 'components/SearchBar';
import { useSearch } from 'providers/Search';

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
    <>
      <SearchBar placeholder="리뷰를 작성할 식당 이름을 검색해주세요" />
      {storeLists ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {storeLists.map(({ Information, _id: id }) => {
            return <RestaurantCardView information={Information} id={id} key={id} />;
          })}
        </ScrollView>
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default ChallengeStore;
