/*
    Animated.sequence() : 接受一系列動畫數組為參數，並一次執行
    Animated.stagger(duration, ) : 其實就是插入了delay的pararell
    Animated.delay()：生成一個延遲時間
 */
import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class FlowInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: [1, 2, 3].map(() => new Animated.Value(0))
        };
    }
    componentDidMount() {
        let timing = Animated.timing;
        Animated.sequence([
            Animated.stagger(200, this.state.anim.map(left => {
                return timing(left, {
                    toValue: 1
                });
            }).concat(this.state.anim.map(left => {
                    return timing(left, {
                        toValue: 0
                    });
                })
            )),
            Animated.delay(400),
            timing(this.state.anim[0], {
                toValue: 1
            }),
            timing(this.state.anim[1], {
                toValue: -1
            }),
            timing(this.state.anim[2], {
                toValue: 0.5
            }),
            Animated.delay(400),
            Animated.parallel(this.state.anim.map((anim) => {
                return timing(anim, {
                    toValue: 0
                });
            }))
        ]).start();
    }
    render() {
        console.log(this.state);
        let views = this.state.anim.map((value, i) => {
            return (
                <Animated.View
                    key={i}
                    style={[styles['demo' + i], {
                        left: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200]
                        })
                    }]}
                >
                    <Text>我是第{i + 1}個View</Text>
                </Animated.View>
            );
        });

        return (
            <View style={styles.container}>
                <Text>sequence/delay/stagger/parallel演示</Text>
                {views}
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    demo0: {
        backgroundColor: 'red'
    },
    demo1: {
        backgroundColor: 'yellow'
    },
    demo2: {
        backgroundColor: 'blue'
    }
};

export default FlowInScreen;
