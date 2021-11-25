import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import { useSearch } from 'providers/Search';

const StoreSearchHint = ({ setSearching }) => {
  const { state, getStoreResult } = useContext(SearchContext);
  const { setText } = useSearch();

  const onPressHint = (text) => {
    setText(text);
    getStoreResult({ term: text });
    setSearching(true);
  };

  return (
    <FlatList
      data={state.hint}
      keyExtractor={(el) => el._id}
      renderItem={({ item }) => {
        const { Name } = item;
        return (
          <TouchableOpacity onPress={() => onPressHint(Name)} style={styles.container}>
            <Text>{Name}</Text>
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
