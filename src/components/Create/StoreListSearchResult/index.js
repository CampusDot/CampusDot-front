import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import style from 'constants/styles';
import LoadingIndicator from 'components/LoadingIndicator';

const StoreListSearchResult = ({ onClickStore }) => {
  const { state } = useContext(SearchContext);
  return (
    <>
      {state.result ? (
        <FlatList
          data={state.result}
          keyExtractor={(_) => _._id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.padding}
          renderItem={({ item }) => {
            const { Information, vicinity } = item;
            return (
              <View style={style.flexRow}>
                <View style={styles.image} />
                <View>
                  <Text>{Information.name}</Text>
                  <Text>{vicinity}</Text>
                </View>
                <TouchableOpacity onPress={() => onClickStore(item)}>
                  <Text>추가하기</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'yellow',
  },
});

export default StoreListSearchResult;
