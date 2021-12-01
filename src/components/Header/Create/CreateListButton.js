/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';
import { Context as StoreListContext } from 'context/StoreList';
import { goBack } from 'lib/utils/navigation';
import FS, { SCALE_WIDTH } from 'lib/utils/normalize';

const CreateListButton = () => {
  const { postStoreList } = useContext(StoreListContext);
  const { stores, information } = useStoreListCreate();

  const onClickPostStoreList = () => {
    const storeLists = [];
    const commentLists = {};
    const photoLists = {};
    const fd = new FormData();
    Object.values(stores).forEach((store) => {
      if (store.comment !== '') {
        commentLists[store.info._id] = store.comment;
      }
      if (store.images.uri !== '') {
        fd.append('img', {
          name: store.images.name,
          type: store.images.type,
          uri: store.images.uri,
        });
        photoLists[store.images.name] = store.info._id;
      }
      storeLists.push(store.info._id);
    });
    postStoreList({
      Stores: storeLists,
      Title: information.title,
      Comment: information.content,
      StoreComment: commentLists,
      PhotoLists: photoLists,
      fd,
    });
    goBack();
  };

  return (
    <TouchableOpacity onPress={onClickPostStoreList} style={styles.icon}>
      <Text style={styles.title}>완료</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FS(18),
    fontWeight: 'normal',
    color: '#111111',
  },
});

export default CreateListButton;
