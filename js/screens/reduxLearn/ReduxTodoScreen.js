import React, { Component } from 'react';
import { View, Text } from 'react-native';

import reducers from './reduxTodo/TodoReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoView from './reduxTodo/TodoView';

class ReduxTodoScreen extends Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>Redux Todo</Text>
                <Provider store={createStore(reducers)}> 
                    <TodoView />
                </Provider>
            </View>
        );
    }
}
export default ReduxTodoScreen;
