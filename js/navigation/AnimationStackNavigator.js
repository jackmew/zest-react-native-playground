import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import FadeInScreen from '../screens/animation/FadeInScreen';
import RotateTextScreen from '../screens/animation/RotateTextScreen';
import FlowInScreen from '../screens/animation/FlowInScreen';
import SpringScreen from '../screens/animation/SpringScreen';
import SpinScreen from '../screens/animation/SpinScreen';
import TimingMultipleScreen from '../screens/animation/TimingMultipleScreen';
import StaggerScreen from '../screens/animation/StaggerScreen';
import SequenceScreen from '../screens/animation/SequenceScreen';
import ParallelScreen from '../screens/animation/ParallelScreen';
import PanResponderScreen from '../screens/animation/PanResponderScreen';

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
          <Button title='RotateText' onPress={() => navigation.navigate('RotateText')} />
          <Button title='FlowIn' onPress={() => navigation.navigate('FlowIn')} />
          <Button title='Spring' onPress={() => navigation.navigate('Spring')} />
          <Button title='Spin' onPress={() => navigation.navigate('Spin')} />
          <Button title='TimingMultiple' onPress={() => navigation.navigate('TimingMultiple')} />
          <Button title='Stagger' onPress={() => navigation.navigate('Stagger')} />
          <Button title='Sequence' onPress={() => navigation.navigate('Sequence')} />
          <Button title='Parallel' onPress={() => navigation.navigate('Parallel')} />
          <Button title='PanResponder' onPress={() => navigation.navigate('PanResponder')} />
        </View>
      </View>
    );
  }
}

const VectorIconsStackNavigator = StackNavigator({
    AnimationHome: { screen: AnimationHome },
    FadeIn: { screen: FadeInScreen },
    RotateText: { screen: RotateTextScreen },
    FlowIn: { screen: FlowInScreen },
    Spring: { screen: SpringScreen },
    Spin: { screen: SpinScreen },
    TimingMultiple: { screen: TimingMultipleScreen },
    Stagger: { screen: StaggerScreen },
    Sequence: { screen: SequenceScreen },
    Parallel: { screen: ParallelScreen },
    PanResponder: { screen: PanResponderScreen }
});
export default VectorIconsStackNavigator;
