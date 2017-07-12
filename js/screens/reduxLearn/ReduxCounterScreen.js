import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import reducers from './reduxCounter/CounterReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterView from './reduxCounter/CounterView';

// import expect from 'expect';
// import { createStore } from 'redux';

// // reducer: state + action -> newState
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// };

// expect(
//     counter(0, { type: 'INCREMENT' })
// ).toEqual(1);

// expect(
//     counter(3, { type: 'DECREMENT' })
// ).toEqual(2);

// expect(
//     counter(undefined, { type: 'SOMETHING' })
// ).toEqual(0);

class ReduxCounterScreen extends Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Text>ReduxCounter</Text>
                <Provider store={createStore(reducers)}> 
                    <CounterView />
                </Provider>
            </View>
        );
    }
}
export default ReduxCounterScreen;