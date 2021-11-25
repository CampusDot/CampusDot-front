import React from 'react';
import Home from 'templates/Main/Home';
import { Provider as CollegeProvider } from 'context/College';
import { Provider as StoreListProvider } from 'context/StoreList';

export default function () {
  return (
    <CollegeProvider>
      <StoreListProvider>
        <Home />
      </StoreListProvider>
    </CollegeProvider>
  );
}
