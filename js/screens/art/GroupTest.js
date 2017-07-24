/**
 * Created by Guang on 16/8/15.
 */

// "use strict";

import React, { Component } from 'react';
import { View, ART } from 'react-native';

const { Surface, Shape, Text, Path, Group } = ART;

export default class GroupTest extends Component {

    render() {
        const pathRect = new Path()
            .moveTo(1, 1)
            .lineTo(1, 99)
            .lineTo(99, 99)
            .lineTo(99, 1)
            .close();

        const pathCircle = new Path()
            .moveTo(50, 1)
            .arc(0, 99, 25)
            .arc(0, -99, 25)
            .close();

        const pathText = new Path()
            .moveTo(40, 5)
            .lineTo(40, 99);

        return (
            <View style={this.props.style}>
                <Surface width={100} height={100}>
                    <Group>
                        <Shape d={pathRect} stroke="#000000" fill="#000000" strokeWidth={1} />
                        <Shape d={pathCircle} stroke="#FFFFFF" fill="#FFFFFF" strokeWidth={1} />
                        <Text strokeWidth={1} strokeDash={[2, 1, 2, 1]} stroke="#000" font="bold 30px Heiti SC" path={pathText} >Swipe</Text>
                    </Group>
                </Surface>
            </View>
        );
    }
}
