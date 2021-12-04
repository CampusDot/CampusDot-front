import React from 'react';
import SearchStore from 'templates/Main/Create/SearchStore';
import { Provider } from 'context/Search';
import SearchProvider from 'providers/Search';

export default function () {
  return (
    <Provider>
      <SearchProvider>
        <SearchStore />
      </SearchProvider>
    </Provider>
  );
}
