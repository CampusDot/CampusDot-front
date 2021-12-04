import React from 'react';
import Home from 'templates/Main/Home';
import { Provider as ReviewProvider } from 'context/Review';

export default function () {
  return (
    <ReviewProvider>
      <Home />
    </ReviewProvider>
  );
}
