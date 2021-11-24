import React from 'react';
import ChallengeStore from 'templates/Main/Create/Review/ChallengeStore';
import { Provider as ReviewProvider } from 'context/Review';
import SearchProvider from 'providers/Search';

export default function () {
  return (
    <ReviewProvider>
      <SearchProvider>
        <ChallengeStore />
      </SearchProvider>
    </ReviewProvider>
  );
}
