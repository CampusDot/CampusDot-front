import React from 'react';
import SelectedStoreReview from 'templates/Main/Create/Review/SelectedStoreReview';
import { Provider as ReviewProvider } from 'context/Review';

export default function ({ route }) {
  const { id, storeListId } = route.params;
  return (
    <ReviewProvider>
      <SelectedStoreReview id={id} storeListId={storeListId} />
    </ReviewProvider>
  );
}
