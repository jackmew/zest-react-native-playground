import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import Line from '../screens/art/Line';
import DashLine from '../screens/art/DashLine';
import Rect from '../screens/art/Rect';
import Circle from '../screens/art/Circle';
import ArtText from '../screens/art/ArtText';
import Fan from '../screens/art/Fan';
import GroupTest from '../screens/art/GroupTest';
import LinearGradientView from '../screens/art/LinearGradientView';
import RadialGradientView from '../screens/art/RadialGradientView';
import TransformTest from '../screens/art/TransformTest';

class ArtHome extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Art',
    drawerIcon: ({ tintColor }) => (
        <Icon name="yelp" size={25} color={tintColor} />
    ),
    header: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header title='Art' navigation={navigation} />
        <View>
          <Button title='Line' onPress={() => navigation.navigate('Line')} />
          <Button title='DashLine' onPress={() => navigation.navigate('DashLine')} />
          <Button title='Rect' onPress={() => navigation.navigate('Rect')} />
          <Button title='Circle' onPress={() => navigation.navigate('Circle')} />
          <Button title='Text' onPress={() => navigation.navigate('ArtText')} />
          <Button title='Fan' onPress={() => navigation.navigate('Fan')} />
          <Button title='GroupTest' onPress={() => navigation.navigate('GroupTest')} />
          <Button title='LinearGradientView' onPress={() => navigation.navigate('LinearGradientView')} />
          <Button title='RadialGradientView' onPress={() => navigation.navigate('RadialGradientView')} />
          <Button title='TransformTest' onPress={() => navigation.navigate('TransformTest')} />
        </View>
      </View>
    );
  }
}

const ArtStackNavigator = StackNavigator({
    ArtHome: { screen: ArtHome },
    Line: { screen: Line },
    DashLine: { screen: DashLine },
    Rect: { screen: Rect },
    Circle: { screen: Circle },
    ArtText: { screen: ArtText },
    Fan: { screen: Fan },
    GroupTest: { screen: GroupTest },
    LinearGradientView: { screen: LinearGradientView },
    RadialGradientView: { screen: RadialGradientView },
    TransformTest: { screen: TransformTest }
});
export default ArtStackNavigator;
