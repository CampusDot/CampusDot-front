import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'screens/Auth';
import SignUp from 'screens/Auth/SignUp';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;