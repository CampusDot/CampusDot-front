import React from 'react';
import CreateReview from 'templates/Main/Create/CreateReview';
import { Provider as ReviewProvider } from 'context/Review';

export default function () {
  return (
    <ReviewProvider>
      <CreateReview />
    </ReviewProvider>
  );
}
