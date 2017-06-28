import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default class CarouselScreen extends React.Component {

    static navigationOptions = {
        title: 'ScrollView Horizontal'
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}
                    pagingEnabled
                >
                    <View style={[styles.scene, { backgroundColor: 'blue' }]}>
                        <Text style={styles.text}>1</Text>
                    </View>
                    <View style={[styles.scene, { backgroundColor: 'red' }]}>
                        <Text style={styles.text}>2</Text>
                    </View>              
                    <View style={[styles.scene, { backgroundColor: 'yellow' }]}>
                        <Text style={styles.text}>3</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scene: {
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      fontSize: 36,
      fontWeight: 'bold'
  }
});
