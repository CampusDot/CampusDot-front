import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screens/Main/Home';
import Stamp from 'screens/Main/Stamp';
import Notice from 'screens/Main/Notice';
import MyPage from 'screens/Main/MyPage';

const Tab = createBottomTabNavigator();
const MyModalBackgroundScreen = () => null;

const TabScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => (focused ? <Text>a</Text> : <Text>b</Text>),
      }}
    />
    <Tab.Screen
      name="Stamp"
      component={Stamp}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => (focused ? <Text>a</Text> : <Text>b</Text>),
      }}
    />
    <Tab.Screen
      name="Create"
      component={MyModalBackgroundScreen}
      options={{
        tabBarIcon: () => <Text>c</Text>,
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate('CreatePosts');
        },
      })}
    />
    <Tab.Screen
      name="Notice"
      component={Notice}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => (focused ? <Text>a</Text> : <Text>b</Text>),
      }}
    />
    <Tab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => (focused ? <Text>a</Text> : <Text>b</Text>),
      }}
    />
  </Tab.Navigator>
);

export default TabScreen;
