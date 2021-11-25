import React from 'react';
import SearchStoreList from 'templates/Main/Create/StoreLists/SearchStoreList';
import StoreListCreateProvider from 'providers/StoreListCreate';
import SearchProvider from 'providers/Search';
import { Provider } from 'context/Search';

export default function () {
  return (
    <Provider>
      <SearchProvider>
        <StoreListCreateProvider>
          <SearchStoreList />
        </StoreListCreateProvider>
      </SearchProvider>
    </Provider>
  );
}
