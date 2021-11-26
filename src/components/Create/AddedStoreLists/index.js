import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';
import CardView from 'components/CardView';
import Header from 'components/CardView/SelectedList/Header';
import StoreComment from '../StoreComment';

const AddedStoreLists = () => {
  const { stores, onClickDeleteStore } = useStoreListCreate();
  const [isEdit, setIsEdit] = useState(false);
  const [editStore, setEditStore] = useState(null);

  const onCloseModal = () => {
    setIsEdit(false);
    setEditStore(null);
  };

  const onClickEdit = (store) => {
    setIsEdit(true);
    setEditStore(store);
  };

  return (
    <>
      {stores.map((item) => {
        const { info, comment } = item;
        return (
          <View key={item.info._id}>
            <CardView
              header={<Header info={info.Information} />}
              photo={info.Information.photos && info.Information.photos[0]}
            />
            <Text>{comment}</Text>
            <TouchableOpacity onPress={() => onClickEdit(item)}>
              <Text>수정하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onClickDeleteStore(info._id)}>
              <Text>지우기</Text>
            </TouchableOpacity>
          </View>
        );
      })}
      {isEdit && (
        <StoreComment
          onCloseModal={onCloseModal}
          store={editStore.info}
          currentComment={editStore.comment}
        />
      )}
    </>
  );
};

export default AddedStoreLists;
