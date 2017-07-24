/*
了解Path的moveTo和LineTo的使用，注意Surface的高度和宽度，多数没有绘制出想要的都是因为渲染区域定义问题
*/
import React, { Component } from 'react';
import { View, ART } from 'react-native';

export default class Line extends Component {

    render() {
        const path = ART.Path();
        path.moveTo(150, 1); //将起始点移动到(1,1) 默认(0,0)
        path.lineTo(300, 1); //连线到目标点(300,1)

        return (
          <View style={this.props.style}>
              <ART.Surface width={300} height={2}>
                  <ART.Shape d={path} stroke="#000000" strokeWidth={10} />
              </ART.Surface>
          </View>
        );
    }
}
