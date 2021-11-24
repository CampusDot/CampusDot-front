import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as SearchContext } from 'context/Search';

const StoreSearchHint = ({ setSearching }) => {
  const { state, getStores } = useContext(SearchContext);
  const onPressHint = (text) => {
    getStores({ term: text });
    setSearching(false);
  };
  return (
    <FlatList
      data={state.hint}
      keyExtractor={(el) => el._id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => onPressHint(item.Name)} style={styles.container}>
            <Text>{item.Name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
});

export default StoreSearchHint;
