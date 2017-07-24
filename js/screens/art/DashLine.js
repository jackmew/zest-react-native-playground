/*
了解strokeDash的参数，
[10,5] : 表示绘10像素实线在绘5像素空白，如此循环
[10,5,20,5] : 表示绘10像素实线在绘制5像素空白在绘20像素实线及5像素空白
*/
import React, { Component } from 'react';
import { View, ART } from 'react-native';

const { Surface, Shape, Path } = ART;

export default class DashLine extends Component {

    render() {
        const path = Path()
            .moveTo(1, 1)
            .lineTo(300, 1);
        return (
            <View style={this.props.style}>
                <Surface width={300} height={2}>
                    <Shape d={path} stroke="#000000" strokeWidth={1} strokeDash={[10, 5]} />
                </Surface>
            </View>
        );
    }
}
