import React from 'react';
import Recommend from 'templates/Main/Recommend';
import { Provider as ReviewProvider } from 'context/Review';

export default function () {
  return (
    <ReviewProvider>
      <Recommend />
    </ReviewProvider>
  );
}
