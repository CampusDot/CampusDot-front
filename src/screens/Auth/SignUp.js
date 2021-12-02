import React from 'react';
import SignUp from 'templates/Auth/SignUp';
import SignProvider from 'providers/Sign';

export default ({ route }) => {
  const { email, password, isSNS } = route.params;
  return (
    <SignProvider>
      <SignUp email={email} password={password} isSNS={isSNS} />
    </SignProvider>
  );
};
