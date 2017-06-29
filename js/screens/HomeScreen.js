import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
    ),
  };
  _onPress() {
    this.props.navigation.navigate('FontAwesome');
    // this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    return (
      <View>
        <Header title='Zest Playground' navigation={this.props.navigation} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>第一個頁面</Text>
        </View>
        <Button
          onPress={() => this._onPress()}
          title="Go to FontAwesome"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
