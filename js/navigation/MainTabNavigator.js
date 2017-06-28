/**
 * @flow
 */

import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import ContentBrowserScreen from '../screens/ContentBrowserScreen';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    ContentBrowser: {
      screen: ContentBrowserScreen
    },
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarLabel: 'Notifications',
      // Set the tab bar icon -> focused: true/false
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let imgEl;
        switch (routeName) {
          case 'ContentBrowser':
            imgEl = <Image source={require('../../assets/icons/tab_browsing.png')} />;
            break;
          case 'Home':
            imgEl = <Image source={require('../../assets/icons/tab_item.png')} />;
            break;
          case 'Links':
            imgEl = <Image source={require('../../assets/icons/tab_profile.png')} />;
            break;
          case 'Settings':
            imgEl = <Image source={require('../../assets/icons/tab_more.png')} />;
            break;
        }
        return imgEl;
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      // showLabel: false,
      activeTintColor: Colors.tabIconSelected
    },
  }
);
