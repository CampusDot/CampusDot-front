/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SCALE_WIDTH } from 'lib/utils/normalize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from 'constants/styles';
import Home from 'screens/Main/Home';
import Notice from 'screens/Main/Notice';
import MyPage from 'screens/Main/MyPage';
import Icon from 'widgets/Icon';
import SearchStore from 'screens/Main/Create/SearchStore';
import Recommend from 'screens/Main/Recommend';

const Tab = createBottomTabNavigator();

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
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon source={require('public/icons/tab_home_focused.png')} style={style.icons} />
          ) : (
            <Icon source={require('public/icons/tab_home.png')} style={style.icons} />
          ),
      }}
    />
    <Tab.Screen
      name="SearchStore"
      component={SearchStore}
      options={{
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon source={require('public/icons/tab_write_focused.png')} style={style.icons} />
          ) : (
            <Icon source={require('public/icons/tab_write.png')} style={style.icons} />
          ),
      }}
    />
    <Tab.Screen
      name="Recommend"
      component={Recommend}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.floating}>
            {focused ? (
              <Icon source={require('public/icons/tab_go_focused.png')} style={styles.icon} />
            ) : (
              <Icon source={require('public/icons/tab_go.png')} style={styles.icon} />
            )}
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Notice"
      component={Notice}
      options={{
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
