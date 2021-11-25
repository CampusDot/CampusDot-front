import React, { useState } from 'react';
import { View } from 'react-native';
import StoreSearchHeader from 'components/Search/StoreSearchHeader';
import StoreSearchHint from 'components/Search/StoreSearchHint';
import StoreSearchResult from 'components/Search/StoreSearchResult';

const StoreSearch = () => {
  const [searching, setSearching] = useState(false);
  return (
    <View>
      <StoreSearchHeader setSearching={setSearching} />
      {searching ? <StoreSearchHint setSearching={setSearching} /> : <StoreSearchResult />}
    </View>
  );
};

export default StoreSearch;
