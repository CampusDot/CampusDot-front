import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'screens/Auth/SignIn';
import SignUp from 'screens/Auth/SignUp';
import SignUpOpt from 'screens/Auth/SignUpOpt';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUpOpt" component={SignUpOpt} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
