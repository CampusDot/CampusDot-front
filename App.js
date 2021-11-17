import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Provider as AuthProvider } from 'context/Auth';
import MainNavigator from './src/navigation';
import { Provider as UserProvider } from './src/context/User';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <UserProvider>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </UserProvider>
  );
};
