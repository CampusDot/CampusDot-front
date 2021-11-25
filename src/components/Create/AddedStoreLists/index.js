import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';
import RestaurantCardView from 'components/Search/StoreSearchResult/RestaurantCardView';
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
            <RestaurantCardView information={info.Information} />
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
