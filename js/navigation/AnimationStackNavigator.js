import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import FadeInScreen from '../screens/animation/FadeInScreen';

class AnimationHome extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Animation',
    drawerIcon: ({ tintColor }) => (
        <Icon name="hand-spock-o" size={25} color={tintColor} />
    ),
    header: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header title='Animation' navigation={navigation} />
        <View>
          <Button title='FadeIn' onPress={() => navigation.navigate('FadeIn')} />
        </View>
      </View>
    );
  }
}

const VectorIconsStackNavigator = StackNavigator({
    AnimationHome: { screen: AnimationHome },
    FadeIn: { screen: FadeInScreen }
});
export default VectorIconsStackNavigator;
