import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesomeScreen from '../screens/vectorIcons/FontAwesomeScreen';

class VectorIconsHome extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Vector Icons',
    drawerIcon: ({ tintColor }) => (
        <Icon name="flag" size={25} color={tintColor} />
    ),
    header: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header title='Vector Icons' navigation={navigation} />
        <View>
          <Button title='FontAwesome' onPress={() => navigation.navigate('FontAwesome')} />
        </View>
      </View>
    );
  }
}

const VectorIconsStackNavigator = StackNavigator({
    VectorIconsHome: { screen: VectorIconsHome },
    FontAwesome: { screen: FontAwesomeScreen }
});
export default VectorIconsStackNavigator;
