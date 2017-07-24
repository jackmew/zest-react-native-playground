/*
了解font属性的使用，规则是bold 35px Heiti SC
注意： 字体应该是支持path属性的，应该是实现bug并没有不生效。 Android通过修改源码是可以解决的，IOS没看源码。
*/
import React, { Component } from 'react';
import { View, ART } from 'react-native';

const { Surface, Text, Path } = ART;

export default class ArtText extends Component {
    render() {
      return (
        <View style={this.props.style}>
            <Surface width={100} height={100}>
                <Text strokeWidth={1} strokeDash={[2, 2, 2, 2]} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40, 40).lineTo(99, 10)} >Swipe</Text>
            </Surface>
        </View>
      );
    }

}
