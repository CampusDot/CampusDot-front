import React from 'react';
import SignUpOpt from 'templates/Auth/SignUpOpt';
import SignProvider from 'providers/Sign';

export default () => {
  return (
    <SignProvider>
      <SignUpOpt />
    </SignProvider>
  );
};
