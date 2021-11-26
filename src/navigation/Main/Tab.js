import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SCALE_WIDTH } from 'lib/utils/Normalize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from 'constants/styles';
import Home from 'screens/Main/Home';
import Stamp from 'screens/Main/Stamp';
import Notice from 'screens/Main/Notice';
import MyPage from 'screens/Main/MyPage';
import Icon from 'widgets/Icon';

const Tab = createBottomTabNavigator();
const MyModalBackgroundScreen = () => null;

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon source={require('public/icons/tab_home_focused.png')} style={style.icons} />
          ) : (
            <Icon source={require('public/icons/tab_home.png')} style={style.icons} />
          ),
      }}
    />
    <Tab.Screen
      name="Stamp"
      component={Stamp}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon source={require('public/icons/tab_stamp_focused.png')} style={style.icons} />
          ) : (
            <Icon source={require('public/icons/tab_stamp.png')} style={style.icons} />
          ),
      }}
    />
    <Tab.Screen
      name="Create"
      component={MyModalBackgroundScreen}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: () => (
          <View style={styles.floating}>
            <Icon source={require('public/icons/tab_create.png')} style={styles.icon} />
          </View>
        ),
        // eslint-disable-next-line react/no-unstable-nested-components
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
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon source={require('public/icons/tab_notice_focused.png')} style={style.icons} />
          ) : (
            <Icon source={require('public/icons/tab_notice.png')} style={style.icons} />
          ),
      }}
    />
    <Tab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon source={require('public/icons/tab_account_focused.png')} style={style.icons} />
          ) : (
            <Icon source={require('public/icons/tab_account.png')} style={style.icons} />
          ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
  },
  icon: {
    width: 85 * SCALE_WIDTH,
    height: 85 * SCALE_WIDTH,
  },
});

export default TabScreen;
