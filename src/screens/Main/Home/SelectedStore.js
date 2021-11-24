import React, {useState} from 'react';
import SelectedStore from 'templates/Main/Home/SelectedStore';
import ReviewCreateProvider from 'providers/ReviewCreate';
import CreateReview from 'templates/Main/Create/CreateReview';
import { Provider as ReviewProvider } from 'context/Review';

export default function () {
  const [isWrite, setIsWrite] = useState(false);

  return (
    <ReviewProvider>
      <ReviewCreateProvider>
        {isWrite ? (
          <CreateReview setIsWrite={setIsWrite} />
        ) : (
          <SelectedStore setIsWrite={setIsWrite} />
        )}
      </ReviewCreateProvider>
    </ReviewProvider>
  );
}
