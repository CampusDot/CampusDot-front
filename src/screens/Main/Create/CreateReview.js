import React from 'react';
import { Provider as SearchProvider } from 'context/Search';
import StoreSearch from 'templates/Main/Search/StoreSearch';
import StoreSearchProvider from 'providers/StoreSearch';

export default function () {
  return (
    <SearchProvider>
      <StoreSearchProvider>
        <StoreSearch />
      </StoreSearchProvider>
    </SearchProvider>
  );
}
