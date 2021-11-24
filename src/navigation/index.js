import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationRef from 'lib/utils/navigation';
import { Context as AuthContext } from 'context/Auth';
import StatusBar from 'components/StatusBar';
import Splash from 'screens/Main/Splash';
import AuthStackScreen from './Auth';
import MainStackScreen from './Main';

const MainNavigator = () => {
  const { state, localSignIn } = useContext(AuthContext);
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    localSignIn();
  }, []);

  if (isSplash) {
    return <Splash setIsSplash={setIsSplash} />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar />
      {state.token ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default MainNavigator;
