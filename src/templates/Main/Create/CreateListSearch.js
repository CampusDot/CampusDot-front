import React, { useState } from 'react';
import { View } from 'react-native';
import CreateListSearchHeader from 'components/Create//CreateListSearchHeader';
import StoreSearchHint from 'components/Search/StoreSearchHint';
import CreateListSearchResult from '../../../components/Create/CreateListSearchResult';
import ListComment from '../../../components/Create/ListComment';

const CreateListSearch = ({ setIsSearch }) => {
  const [searching, setSearching] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <CreateListSearchHeader setSearching={setSearching} setIsSearch={setIsSearch} />
      {searching ? <StoreSearchHint setSearching={setSearching} /> : <CreateListSearchResult />}

      <ListComment setIsSearch={setIsSearch} />
    </View>
  );
};

export default CreateListSearch;
