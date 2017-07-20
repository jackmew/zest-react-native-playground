/*
    Animated.timing.parallel() : 可以對多個state設定變化
    Animated.Value().interpolate() : 插值函數（單位的映射換算）inputRange: [0, 1] => outputRange: ['0deg', '720deg'] 
    0 --> 0deg
    1 --> 720deg
    0~1之間的數字 會自動對應
*/
import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

class RotateTextScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeInOpacity: new Animated.Value(0),
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0)
        };
    }
    componentDidMount() {
        let timing = Animated.timing;
        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return timing(this.state[property], {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            });
        })).start();
    }
    render() {
        return (
            <Animated.View 
                style={{ 
                    opacity: this.state.fadeInOpacity, 
                    transform: [{ 
                        rotateZ: this.state.rotation.interpolate({ 
                            inputRange: [0, 1], 
                            outputRange: ['0deg', '720deg']
                            }) 
                        }]
                }}
            >
                <Animated.Text 
                    style={{ 
                        fontSize: this.state.fontSize.interpolate({
                            inputRange: [0, 1],
                            outputRange: [12, 26]
                        })
                    }}
                >
                    我騎著七彩祥雲出現了
                </Animated.Text>
            </Animated.View>
        );
    }
}
export default RotateTextScreen;
