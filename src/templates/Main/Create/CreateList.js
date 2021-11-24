import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';

import ListInput from 'components/Main/ListInput';
import ListAddButton from 'components/Main/ListAddButton';
import ListAdded from 'components/Main/ListAdded';
import CreateListButton from 'components/Header/Home/CreateListButton';

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
