import React from 'react';
import CreateReview from 'templates/Main/Create/CreateReview';
import { Provider } from 'context/StoreList';

export default function () {
  return (
    <Provider>
      <CreateReview />
    </Provider>
  );
}
