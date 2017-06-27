import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Layout from '../../constants/Layout';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        width: Layout.browserContent.cardWidth,
        alignSelf: 'stretch',
        backgroundColor: 'rgb(219, 112, 112)',
        borderRadius: 10
    },
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5
    }
};

export default Button;
