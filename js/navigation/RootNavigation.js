
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import VectorIconsStackNavigtor from './VectorIconsStackNavigtor';
import ScrollViewStackNavigator from './ScrollViewStackNavigator';
import VideoPlayStackNavigator from './VideoPlayStackNavigator';
import AnimationStackNavigator from './AnimationStackNavigator';
import ReduxLearnStackNavigator from './ReduxLearnStackNavigator';

import ParallelScreen from '../screens/animation/ParallelScreen';

const RootStackNavigator = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    // screen: ParallelScreen
  },
  VectorIcons: {
    screen: VectorIconsStackNavigtor,
  },
  ScrollView: {
    screen: ScrollViewStackNavigator
  },
  VideoPlay: {
    screen: VideoPlayStackNavigator
  },
  Animation: {
    screen: AnimationStackNavigator
  },
  ReduxLearn: {
    screen: ReduxLearnStackNavigator
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
