import React from 'react';
import School from 'templates/Main/MyPage/menu/School';
import SignProvider from 'providers/Sign';

export default ({ route }) => {
  const { type } = route.params;
  return (
    <SignProvider>
      <School type={type} />
    </SignProvider>
  );
};
