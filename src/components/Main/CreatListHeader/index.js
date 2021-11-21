import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import style from 'constants/styles';
import { goBack } from 'lib/utils/navigation';
import { Context } from 'context/StoreList';
import { useListCreate } from 'providers/ListCreate';

const Header = () => {
  // const { Name } = PostUser;
  const { postStoreList } = useContext(Context);
  const { stores, informationRef } = useListCreate();
  const onClickPostStoreList = () => {
    postStoreList({
      Stores: stores,
      Title: informationRef.title,
      Comment: informationRef.content,
    });
  };

  return (
    <View style={[styles.container, style.flexRow]}>
      <TouchableOpacity onPress={goBack}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClickPostStoreList}>
        <Text>업로드하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default Header;
