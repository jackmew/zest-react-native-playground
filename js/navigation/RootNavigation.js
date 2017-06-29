
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import VectorIconsStackNavigtor from './VectorIconsStackNavigtor';
import ScrollViewStackNavigator from './ScrollViewStackNavigator';
import VideoPlayStackNavigator from './VideoPlayStackNavigator';

const RootStackNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  VectorIcons: {
    screen: VectorIconsStackNavigtor,
  },
  ScrollView: {
    screen: ScrollViewStackNavigator
  },
  VideoPlay: {
    screen: VideoPlayStackNavigator
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
