import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';

import ListInput from 'components/Create/ListInput';
import ListAddButton from 'components/Create//ListAddButton';
import ListAdded from 'components/Create//ListAdded';
import CreateListButton from 'components/Header/Create/CreateListButton';

const CreateList = ({ setIsSearch }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header back actions={<CreateListButton />} />
      <ListInput />
      <ListAddButton setIsSearch={setIsSearch} />
      <ListAdded setIsSearch={setIsSearch} />
    </View>
  );
};

export default CreateList;
