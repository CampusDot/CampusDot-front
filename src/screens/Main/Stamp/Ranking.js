import React from 'react';
import Ranking from 'templates/Main/Stamp/Ranking';
import { Provider as CollegeProvider } from 'context/College';

export default function () {
  return (
    <CollegeProvider>
      <Ranking />
    </CollegeProvider>
  );
}
