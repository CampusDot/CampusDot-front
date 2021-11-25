import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import RestaurantCardView from './RestaurantCardView';

const StoreSearchResult = () => {
  const { state } = useContext(SearchContext);
  return (
    <FlatList
      data={state.result}
      keyExtractor={(el) => el._id}
      renderItem={({ item }) => {
        return <RestaurantCardView information={item} />;
      }}
    />
  );
};

export default StoreSearchResult;
