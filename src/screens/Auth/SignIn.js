import React from 'react';
import SignIn from 'templates/Auth/SignIn';
import SignProvider from 'providers/Sign';

export default () => {
  return (
    <SignProvider>
      <SignIn />
    </SignProvider>
  );
};
