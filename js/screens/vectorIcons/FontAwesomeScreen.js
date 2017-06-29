
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

export default class FontAwesomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'FontAwesome',
    drawerIcon: ({ tintColor }) => (
      <Icon name="flag" size={25} color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
          <CustomTextButton />
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
