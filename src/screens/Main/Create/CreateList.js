import React, { useState } from 'react';
import CreateList from 'templates/Main/Create/CreateList';
import CreateListSearch from 'templates/Main/Create/CreateListSearch';
import { Provider as StoreListProvider } from 'context/StoreList';
import { Provider as SearchingProvider } from 'context/Search';
import ListCreateProvider from 'providers/ListCreate';
import SearchProvider from 'providers/Search';

export default function () {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <StoreListProvider>
      <SearchingProvider>
        <SearchProvider>
          <ListCreateProvider>
            {isSearch ? (
              <CreateListSearch setIsSearch={setIsSearch} />
            ) : (
              <CreateList setIsSearch={setIsSearch} />
            )}
          </ListCreateProvider>
        </SearchProvider>
      </SearchingProvider>
    </StoreListProvider>
  );
}
