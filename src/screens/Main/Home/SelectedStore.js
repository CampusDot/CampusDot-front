import React from 'react';
import SelectedStoreReview from 'templates/Main/Create/Review/SelectedStoreReview';
import { Provider as ReviewProvider } from 'context/Review';
import Header from 'components/Header';

export default function ({ route }) {
  const { id } = route.params;
  return (
    <ReviewProvider>
      <Header back title="리뷰" />
      <SelectedStoreReview id={id} />
    </ReviewProvider>
  );
}
