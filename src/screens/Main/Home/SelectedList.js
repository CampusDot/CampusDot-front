import React from 'react';
import SelectedList from 'templates/Main/Home/SelectedList';
import { Provider as StoreListProvider } from 'context/StoreList';

export default function ({ route }) {
  return (
    <StoreListProvider>
      <SelectedList id={route.params.id} />
    </StoreListProvider>
  );
}
