import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useListCreate } from 'providers/ListCreate';
import style from '../../../constants/styles';

const Header = ({ setIsSearch }) => {
  const { edit, setCurrentStore, setCurrentComment, setCommenting, onAddStore, onEditStore } =
    useListCreate();
  const onClickAdd = async () => {
    await onAddStore();
    setCurrentComment('');
    setCurrentStore(null);
    setCommenting(false);
    setIsSearch(false);
  };

  const onClickEdit = async () => {
    await onEditStore();
    setCurrentComment('');
    setCurrentStore();
    setCommenting(false);
    setIsSearch(false);
  };
  return (
    <View style={style.flexRow}>
      <View style={style.flexRow}>
        <Text>식당소개 </Text>
        <TouchableOpacity
          onPress={() => {
            // eslint-disable-next-line no-unused-expressions
            edit ? onClickEdit() : onClickAdd();
          }}
        >
          <Text>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
