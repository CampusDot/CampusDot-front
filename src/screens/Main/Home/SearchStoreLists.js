import React from 'react';
import SearchStoreLists from 'templates/Main/Home/SearchStoreLists';
import SearchProvider from 'providers/Search';

export default function () {
  return (
    <SearchProvider>
      <SearchStoreLists />
    </SearchProvider>
  );
}
