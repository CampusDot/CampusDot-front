import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';
import { Context as StoreListContext } from 'context/StoreList';
import { goBack } from 'lib/utils/navigation';

const CreateListButton = () => {
  const { postStoreList } = useContext(StoreListContext);
  const { stores, information } = useStoreListCreate();

  const onClickPostStoreList = () => {
    const storeLists = [];
    const commentLists = {};
    Object.values(stores).forEach((store) => {
      if (store.comment !== '') {
        commentLists[store.info._id] = store.comment;
      }
      storeLists.push(store.info._id);
    });
    postStoreList({
      Stores: storeLists,
      Title: information.title,
      Comment: information.content,
      StoreComment: commentLists,
    });
    goBack();
  };

  return (
    <TouchableOpacity
      onPress={onClickPostStoreList}
      style={{ width: 40, height: 40, borderWidth: 1 }}
    />
  );
};

export default CreateListButton;
