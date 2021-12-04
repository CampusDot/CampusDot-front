import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import { useSearch } from 'providers/Search';
import SearchBar from 'components/SearchBar';
import StoreSearchHint from 'components/Search/StoreSearchHint';
import StoreResult from 'components/Create/StoreResult';

const SearchStore = () => {
  const { getStoreHint, getStoreResult, initHint } = useContext(SearchContext);
  const { text } = useSearch();
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

  return (
    <View style={styles.container}>
      <SearchBar placeholder="식당 이름을 검색해주세요" onSubmit={onPressSearch} />
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
