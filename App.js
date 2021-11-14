import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Provider as AuthProvider } from 'context/Auth';
import MainNavigator from './src/navigation';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
};
