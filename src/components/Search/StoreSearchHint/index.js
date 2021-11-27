import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import { useSearch } from 'providers/Search';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

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
      style={styles.listContainer}
      renderItem={({ item }) => {
        const { Name } = item;
        return (
          <TouchableOpacity onPress={() => onPressHint(Name)} style={styles.college}>
            <Text style={styles.name}>{Name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 24 * SCALE_HEIGHT,
    paddingLeft: 37 * SCALE_WIDTH,
  },
  college: {
    marginBottom: 20 * SCALE_HEIGHT,
  },
  name: {
    fontSize: FS(16),
  },
});

export default StoreSearchHint;
