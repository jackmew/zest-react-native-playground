import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import ScrollViewHorizontal from '../screens/scrollView/ScrollViewHorizontal';
import CarouselScreen from '../screens/scrollView/CarouselScreen';

class ScrollViewScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'ScrollView',
    drawerIcon: ({ tintColor }) => (
        <Icon name="window-maximize" size={25} color={tintColor} />
    ),
    header: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header title='ScrollView' navigation={navigation} />
        <View>
          <Button title='Horizontal ScrollView' onPress={() => navigation.navigate('ScrollViewHorizontal')} />
        </View>
        <View>
          <Button title='Carousel' onPress={() => navigation.navigate('Carousel')} />
        </View>
      </View>
    );
  }
}

const ScrollViewStackNavigator = StackNavigator({
    ScrollView: { screen: ScrollViewScreen },
    ScrollViewHorizontal: { screen: ScrollViewHorizontal },
    Carousel: { screen: CarouselScreen }
});
export default ScrollViewStackNavigator;
