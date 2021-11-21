import React from 'react';
import { View } from 'react-native';
import CreatListHeader from 'components/Main/CreatListHeader';
import ListInput from 'components/Main/ListInput';
import ListAddButton from 'components/Main/ListAddButton';
import ListAdded from 'components/Main/ListAdded';

const CreateList = ({ setIsSearch }) => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <CreatListHeader />
      <ListInput />
      <ListAddButton setIsSearch={setIsSearch} />
      <ListAdded setIsSearch={setIsSearch} />
    </View>
  );
};

export default CreateList;
