import React, { useContext } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Context as StoreListContext } from 'context/StoreList';
import LoadingIndicator from 'components/LoadingIndicator';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import Restaurant from './Restaurant';

const Challenge = () => {
  const { state } = useContext(StoreListContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>도전 중</Text>
      {state.challengeStoreList ? (
        <FlatList
          horizontal
          data={state.challengeStoreList}
          keyExtractor={(store) => store.storeInfo._id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatContainer}
          renderItem={({ item }) => {
            return <Restaurant information={item} />;
          }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 13 * SCALE_HEIGHT,
    marginBottom: 8 * SCALE_HEIGHT,
  },
  title: {
    fontSize: FS(16),
    fontWeight: 'bold',
    marginLeft: 14 * SCALE_WIDTH,
  },
  flatContainer: {
    paddingLeft: 14 * SCALE_WIDTH,
  },
});

export default Challenge;
