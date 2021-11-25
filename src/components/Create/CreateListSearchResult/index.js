import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useListCreate } from 'providers/ListCreate';
import { Context as SearchContext } from 'context/Search';
import StoreImage from 'widgets/StoreImage';
import style from '../../../constants/styles';

const CreateListSearchResult = () => {
  const { setCommenting, setCurrentStore } = useListCreate();
  const { state } = useContext(SearchContext);
  const onClickAdd = ({ object }) => {
    setCurrentStore(object);
    setCommenting(true);
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={state.result}
        keyExtractor={(_) => _._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.padding}
        renderItem={({ item }) => {
          const { name, photos, vicinity, _id } = item.Information;
          return (
            <View>
              <View style={style.flexRow}>
                <StoreImage image={photos && photos[0].photo_reference} imageStyle={styles.image} />
                <View>
                  <Text>{name}</Text>
                  <Text>{vicinity}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity onPress={() => onClickAdd({ object: item })}>
                  <Text>추가하기</Text>
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
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'yellow',
  },
  click: {
    backgroundColor: 'yellow',
  },
  notclick: {
    backgroundColor: 'white',
  },
});

export default CreateListSearchResult;
