/*
    Animatable Component
    1. Animated.View
    2. Animated.Text
    3. Animated.Image
    4. Custom your own
*/

import React from 'react';
import { Text, Animated, View } from 'react-native';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class FadeInScreen extends React.Component {
  static navigationOptions = {
    title: 'Fade In'
  };
  render() {
    return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    // <View style={[styles.container]}>
     <View style={[styles.container, { flex: 1 }]}>
        <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
          <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
        </FadeInView>
      </View>
    );
  }
}
const styles = {
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};
