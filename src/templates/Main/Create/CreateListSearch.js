import React from 'react';
import { View } from 'react-native';
import CreateListSearchHeader from 'components/Create//CreateListSearchHeader';
import CreateListSearchResult from '../../../components/Create/CreateListSearchResult';
import ListComment from '../../../components/Create/ListComment';

const CreateListSearch = ({ setIsSearch }) => {
  return (
    <View style={{ flex: 1 }}>
      <CreateListSearchHeader setIsSearch={setIsSearch} />
      <CreateListSearchResult />
      <ListComment setIsSearch={setIsSearch} />
    </View>
  );
};

export default CreateListSearch;
