import React, { useState } from 'react';
import CreateList from 'templates/Main/Create/CreateList';
import CreateListSearch from 'templates/Main/Create/CreateListSearch';
import { Provider } from 'context/StoreList';
import ListCreateProvider from 'providers/ListCreate';

export default function () {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Provider>
      <ListCreateProvider>
        {isSearch ? (
          <CreateListSearch setIsSearch={setIsSearch} />
        ) : (
          <CreateList setIsSearch={setIsSearch} />
        )}
      </ListCreateProvider>
    </Provider>
  );
}
