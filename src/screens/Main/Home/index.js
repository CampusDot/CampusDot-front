import React from 'react';
import Home from 'templates/Main/Home';
import { Provider as CollegeProvider } from 'context/College';

export default function () {
  return (
    <CollegeProvider>
      <Home />
    </CollegeProvider>
  );
}
