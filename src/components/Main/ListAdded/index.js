import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useListCreate } from 'providers/ListCreate';
import style from 'constants/styles';

const ListAdded = ({ setIsSearch }) => {
  const { stores, onClickDeleteStore, onClickEdit } = useListCreate();
  const onPressEdit = (item) => {
    setIsSearch(true);
    onClickEdit(item);
  };

  return (
    <View>
      <FlatList
        data={stores}
        keyExtractor={(_) => _.store._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.padding}
        renderItem={({ item }) => {
          const { store, comment } = item;
          return (
            <View style={style.flexRow}>
              <View style={styles.image} />
              <View>
                <Text>{store.Information.name}</Text>
                <Text>{store.vicinity}</Text>
                <Text>{comment}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => onPressEdit(item)}>
                  <Text>수정하기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onClickDeleteStore(item)}>
                  <Text>지우기</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default ListAdded;
