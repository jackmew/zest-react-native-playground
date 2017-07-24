/*
  了解close()的使用，close的意思是创建一个密闭的路径。首先通过lineTo绘制三条边，在使用close链接第四条边。fill做颜色填充
 */
import React, { Component } from 'react';
import { View, ART } from 'react-native';

const { Surface, Shape, Path } = ART;

export default class Rect extends Component {

    render() {
      const path = new Path()
          .moveTo(1, 1)
          .lineTo(1, 99)
          .lineTo(99, 99)
          .lineTo(99, 1)
          .close();
      return (
          <View style={this.props.style}>
              <Surface width={100} height={100}>
                  <Shape d={path} stroke="#000000" strokeWidth={1} />
                  {/*<Shape d={path} stroke="#000000" fill="#892265" strokeWidth={1} /> */}
              </Surface>
          </View>
      );
    }
}
