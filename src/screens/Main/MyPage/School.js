import React from 'react';
import School from 'templates/Main/MyPage/menu/School';
import SignProvider from 'providers/Sign';

export default ({ route }) => {
  const { email, password, name, college } = route.params;
  return (
    <SignProvider>
      <School email={email} password={password} name={name} college={college} />
    </SignProvider>
  );
};
