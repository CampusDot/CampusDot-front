import React from 'react';
import School from 'templates/Auth/School';
import SignProvider from 'providers/Sign';

export default ({ route }) => {
  const { email, password, name } = route.params;
  console.log(email);
  return (
    <SignProvider>
      <School />
    </SignProvider>
  );
};
