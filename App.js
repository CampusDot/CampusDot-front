import React from 'react';
import { Provider as AuthProvider } from 'context/Auth';
import MainNavigator from './src/navigation';
import { Provider as UserProvider } from './src/context/User';
import InfinityScrollProvider from './src/providers/InfinityScroll';

export default () => {
  return (
    <UserProvider>
      <AuthProvider>
        <InfinityScrollProvider>
          <MainNavigator />
        </InfinityScrollProvider>
      </AuthProvider>
    </UserProvider>
  );
};
