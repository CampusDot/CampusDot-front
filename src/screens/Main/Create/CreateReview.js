import React from 'react';
import { Provider as SearchingProvider } from 'context/Search';
import StoreSearch from 'templates/Main/Search/StoreSearch';
import SearchProvider from 'providers/Search';

export default function () {
  return (
    <SearchingProvider>
      <SearchProvider>
        <StoreSearch />
      </SearchProvider>
    </SearchingProvider>
  );
}
