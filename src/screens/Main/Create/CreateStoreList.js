import React from 'react';
import CreateStoreList from 'templates/Main/Create/StoreLists/CreateStoreList';
import { Provider as StoreListProvider } from 'context/StoreList';
import StoreListCreateProvider from 'providers/StoreListCreate';

export default function ({ route }) {
  const { store } = route.params;
  return (
    <StoreListProvider>
      <StoreListCreateProvider>
        <CreateStoreList store={store} />
      </StoreListCreateProvider>
    </StoreListProvider>
  );
}
