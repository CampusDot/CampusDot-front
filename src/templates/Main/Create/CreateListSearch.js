import React from 'react';
import { View } from 'react-native';
import CreateListSearchHeader from '../../../components/Main/CreateListSearchHeader';
import CreateListSearchResult from '../../../components/Main/CreateListSearchResult';
import ListComment from '../../../components/Main/ListComment';

const CreateListSearch = ({ setIsSearch }) => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <CreateListSearchHeader setIsSearch={setIsSearch} />
      <CreateListSearchResult />
      <ListComment setIsSearch={setIsSearch} />
    </View>
  );
};

export default CreateListSearch;
