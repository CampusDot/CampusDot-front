import React from 'react';
import CreateReview from 'templates/Main/Create/Review/CreateReview';
import { Provider as ReviewProvider } from 'context/Review';

export default function ({ route }) {
  const { id } = route.params;
  return (
    <ReviewProvider>
      <CreateReview id={id} />
    </ReviewProvider>
  );
}
