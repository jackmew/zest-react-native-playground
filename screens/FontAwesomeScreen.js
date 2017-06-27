
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

export default class FontAwesomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/icons/tab_item.png')}
        style={[styles.icon, { tintColor }]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Header title='FontAwesome' navigation={this.props.navigation} />
        <View>
            <CustomTextButton />
        </View>
      </View>
    );
  }
}
const CustomTextButton = () => {
  return (
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{ fontFamily: 'Arial', fontSize: 15, color: 'white' }}>Login with Facebook</Text>
      </Icon.Button>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
