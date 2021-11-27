import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';
import CardView from 'components/CardView';
import Header from 'components/CardView/SelectedList/Header';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import style from 'constants/styles';
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
    <View style={styles.container}>
      {stores.map((item) => {
        const { info, comment } = item;
        return (
          <View key={item.info._id} style={styles.padding}>
            <CardView
              header={<Header info={info.Information} />}
              photo={info.Information.photos ? info.Information.photos : []}
              footer={
                <>
                  <Text style={styles.comment}>{comment}</Text>
                  <View style={[style.flexRow, styles.flex_end]}>
                    <TouchableOpacity onPress={() => onClickEdit(item)}>
                      <Text style={styles.edit}>수정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onClickDeleteStore(info._id)}>
                      <Text style={styles.edit}>삭제</Text>
                    </TouchableOpacity>
                  </View>
                </>
              }
            />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14 * SCALE_WIDTH,
  },
  comment: {
    fontSize: FS(12),
    color: '#191919',
    marginTop: 9 * SCALE_HEIGHT,
    marginLeft: 12 * SCALE_WIDTH,
    marginVertical: 10 * SCALE_HEIGHT,
  },
  padding: {
    marginBottom: 14 * SCALE_HEIGHT,
  },
  edit: {
    fontSize: FS(12),
    color: '#191919',
    marginRight: 12 * SCALE_WIDTH,
    marginBottom: 15 * SCALE_HEIGHT,
  },
  flex_end: {
    justifyContent: 'flex-end',
  },
});
export default AddedStoreLists;
