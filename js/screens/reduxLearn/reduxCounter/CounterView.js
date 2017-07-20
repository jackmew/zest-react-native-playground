import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { increment, decrement } from './CounterActions';
import { connect } from 'react-redux';

class CounterView extends Component {
    render() {
        const { counter, increment, decrement } = this.props;
        return (
            <View>
                <Text>{counter}</Text>
                <Button onPress={increment} title='+' />
                <Button onPress={decrement} title='-' />
            </View>
        );
    }
}
const mapStateToProps = ({ counter }) => {
    return { counter };
};
export default connect(mapStateToProps, { increment, decrement })(CounterView);
