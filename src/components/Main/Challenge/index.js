import React, { useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Context as StoreListContext } from 'context/StoreList';
import LoadingIndicator from 'components/LoadingIndicator';
import Restaurant from './Restaurant';

const Challenge = () => {
  const { state } = useContext(StoreListContext);
  return (
    <View>
      <Text style={{ marginTop: 100 }}>도전 중</Text>
      {state.challengeStoreList ? (
        <FlatList
          horizontal
          data={state.challengeStoreList}
          keyExtractor={(store) => store._id}
          showsHorizontalScrollIndicator={false}
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

export default Challenge;
