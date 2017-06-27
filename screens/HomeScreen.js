import React from 'react';
import { StyleSheet, Image, Button, View } from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/tab_browsing.png')}
        style={[styles.icon, { tintColor }]}
      />
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
