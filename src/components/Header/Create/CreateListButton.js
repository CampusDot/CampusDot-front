import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { useListCreate } from 'providers/ListCreate';
import { Context as StoreListContext } from 'context/StoreList';

const CreateListButton = () => {
  const { postStoreList } = useContext(StoreListContext);
  const { stores, informationRef } = useListCreate();
  const onClickPostStoreList = () => {
    postStoreList({
      Stores: stores,
      Title: informationRef.title,
      Comment: informationRef.content,
    });
  };

  return (
    <TouchableOpacity
      onPress={onClickPostStoreList}
      style={{ width: 40, height: 40, borderWidth: 1 }}
    />
  );
};

export default CreateListButton;
