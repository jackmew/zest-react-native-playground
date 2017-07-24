/*
这里使用的是react-art中封装的一个组件地址，内部还是使用arc做路径绘制，感兴趣的同学可以阅读一下代码
 */
import React, { Component } from 'react';
import { View, ART } from 'react-native';
import Wedge from './Wedge';

const { Surface } = ART;

export default class Fan extends Component {

    render() {
      return (
          <View style={this.props.style}>
              <Surface width={100} height={100}>
                  <Wedge
                    outerRadius={50}
                    startAngle={0}
                    endAngle={60}
                      originX={50}
                      originY={50}
                    fill="blue"
                  />
              </Surface>
          </View>
      );
    }
}
