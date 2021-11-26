import React from 'react';
import FriendCollege from 'templates/Main/Home/FriendCollege';
import { Provider as CollegeProvider } from 'context/College';
import Invisible from 'templates/Main/Home/Invisible';
import SearchProvider from 'providers/Search';

export default function () {
  const stamp = 2;
  return (
    <SearchProvider>
      {stamp < 3 ? (
        <Invisible stamp={stamp} />
      ) : (
        <CollegeProvider>
          <FriendCollege />
        </CollegeProvider>
      )}
    </SearchProvider>
  );
}
