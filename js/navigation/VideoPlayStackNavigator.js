import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import VideoPlayerScreen from '../screens/videoPlay/VideoPlayerScreen';
import VideoJumpSubtitleScreen from '../screens/videoPlay/VideoJumpSubtitleScreen';

class VideoPlayerHome extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Video',
    drawerIcon: ({ tintColor }) => (
        <Icon name="play-circle" size={25} color={tintColor} />
    ),
    header: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header title='Video' navigation={navigation} />
        <View>
          <Button title='Video Player' onPress={() => navigation.navigate('VideoPlayer')} />
        </View>
        <View>
          <Button title='Video Jump Subtitle' onPress={() => navigation.navigate('VideoJumpSubtitle')} />
        </View>
      </View>
    );
  }
}

const VideoPlayStackNavigator = StackNavigator({
    VideoPlayerHome: { screen: VideoPlayerHome },
    VideoPlayer: { screen: VideoPlayerScreen },
    VideoJumpSubtitle: { screen: VideoJumpSubtitleScreen }
});
export default VideoPlayStackNavigator;
