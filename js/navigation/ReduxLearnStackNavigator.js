import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';

import ReduxCounterScreen from '../screens/reduxLearn/ReduxCounterScreen';
import ReduxTodoScreen from '../screens/reduxLearn/ReduxTodoScreen';

class ReduxLearnHome extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Redux',
    drawerIcon: ({ tintColor }) => (
        <Icon name="snowflake-o" size={25} color={tintColor} />
    ),
    header: null
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header title='Redux' navigation={navigation} />
        <View style={{ margin: 20 }}>
            <Text>1.Make a Ruducer and Text it using expect.js</Text>
            <Text>2.Store Implementation</Text>
            <Text>3.Counter</Text>
            <Text>4.Pure Array, Object -> React Shallow comparison</Text>
            <Text>5.Todo Reducer -> Reducer Composition -> CombineReducerImplementation</Text>
            <Text>6.Simple Todo</Text>
            <Text>7.Extract Presentation & Container</Text>
            <Text>8.React State -> Store State</Text>
            <Text>9.Provider</Text>
            <Text>10.connect</Text>
        </View>
        <View>
          <Button title='Redux Counter' onPress={() => navigation.navigate('ReduxCounter')} />
        </View>
        <View>
          <Button title='Redux Todo' onPress={() => navigation.navigate('ReduxTodo')} />
        </View>
      </View>
    );
  }
}

const ReduxLearnStackNavigator = StackNavigator({
    ReduxLearnHome: { screen: ReduxLearnHome },
    ReduxCounter: { screen: ReduxCounterScreen },
    ReduxTodo: { screen: ReduxTodoScreen }
});
export default ReduxLearnStackNavigator;
