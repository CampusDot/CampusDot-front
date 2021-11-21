import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useListCreate } from 'providers/ListCreate';
import style from '../../../constants/styles';

const ListAdded = ({ setIsSearch }) => {
  const { stores, onClickDeleteSong, onClickEdit } = useListCreate();
  const onEdit = async (item) => {
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
          return (
            <View style={style.flexRow}>
              <View style={styles.image} />
              <View>
                <Text>{item.store.Information.name}</Text>
                <Text>{item.store.vicinity}</Text>
                <Text>{item.comment}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    onEdit(item);
                  }}
                >
                  <Text>수정하기</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    onClickDeleteSong(item);
                  }}
                >
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
