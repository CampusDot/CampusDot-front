import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'screens/Auth/SignIn';
import SignUp from 'screens/Auth/SignUp';
import SignUpOpt from 'screens/Auth/SignUpOpt';
import School from 'screens/Main/MyPage/School';

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
    <AuthStack.Screen name="School" component={School} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
