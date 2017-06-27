import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation/RootNavigation';

export default class App extends Component {
  state = {
    appIsReady: true,
  };

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
    return (
      <View>
        <Text>App Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
