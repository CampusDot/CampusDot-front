import React, { useState, useContext, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import { useSearch } from 'providers/Search';
import SearchBar from 'components/SearchBar';
import StoreSearchHint from 'components/Search/StoreSearchHint';
import StoreResult from 'components/Create/StoreResult';
import { useFocusEffect } from '@react-navigation/native';

const SearchStore = () => {
  const { getStoreHint, getStoreResult, initHint } = useContext(SearchContext);
  const { text, setText } = useSearch();
  const [searching, setSearching] = useState(false);

  const onPressSearch = () => {
    getStoreResult({ term: text });
    setSearching(true);
  };

  useEffect(() => {
    if (text) {
      getStoreHint({ term: text });
    } else {
      initHint();
      setSearching(false);
    }
  }, [text]);

  useFocusEffect(
    useCallback(() => {
      setText('');
    }, []),
  );

  return (
    <View style={styles.container}>
      <SearchBar placeholder="리뷰를 작성할 식당 이름을 검색해 주세요" onSubmit={onPressSearch} />
      {searching ? <StoreResult /> : <StoreSearchHint setSearching={setSearching} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SearchStore;
