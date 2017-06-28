
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import FontAwesomeScreen from '../screens/FontAwesomeScreen';
import ScrollViewStackNavigator from './ScrollViewStackNavigator';

const RootStackNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  FontAwesome: {
    screen: FontAwesomeScreen,
  },
  ScrollView: {
    screen: ScrollViewStackNavigator
  }
});
/*
  push notification settings
*/
export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
