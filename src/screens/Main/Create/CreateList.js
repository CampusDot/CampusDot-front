import React, { useState } from 'react';
import CreateList from 'templates/Main/Create/CreateList';
import CreateListSearch from 'templates/Main/Create/CreateListSearch';
import { Provider as StoreListProvider } from 'context/StoreList';
import { Provider as SearchProvider } from 'context/Search';
import ListCreateProvider from 'providers/ListCreate';
import StoreSearchProvider from 'providers/StoreSearch';

export default function () {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <StoreListProvider>
      <SearchProvider>
        <StoreSearchProvider>
          <ListCreateProvider>
            {isSearch ? (
              <CreateListSearch setIsSearch={setIsSearch} />
            ) : (
              <CreateList setIsSearch={setIsSearch} />
            )}
          </ListCreateProvider>
        </StoreSearchProvider>
      </SearchProvider>
    </StoreListProvider>
  );
}
