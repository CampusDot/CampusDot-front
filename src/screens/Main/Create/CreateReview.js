import React from 'react';
import CreateReview from 'templates/Main/Create/Review/CreateReview';
import ReviewCreateProvider from 'providers/ReviewCreate';
import { Provider as ReviewProvider } from 'context/Review';

export default function ({ route }) {
  const { id, storeListId, type } = route.params;
  return (
    <ReviewProvider>
      <ReviewCreateProvider>
        <CreateReview id={id} storeListId={storeListId} type={type} />
      </ReviewCreateProvider>
    </ReviewProvider>
  );
}
