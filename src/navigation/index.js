import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationRef from 'lib/utils/navigation';
import { Context as AuthContext } from 'context/Auth';
import StatusBar from 'components/StatusBar';
import AuthStackScreen from './Auth';
import MainStackScreen from './Main';

const MainNavigator = () => {
  const { state, localSignIn } = useContext(AuthContext);

  useEffect(() => {
    localSignIn();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar />
      {state.token ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default MainNavigator;
