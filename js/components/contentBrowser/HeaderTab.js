// Import libraries for making a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../constants/Colors';
import HeaderTabChild from './HeaderTabChild';

// Make a component
export default class HeaderTab extends Component {
    constructor(props) {
        super(props);
        this.state = { tabSelected: 'hotCategory' };
    }
    _onTabSelect(tabSelected) {
        this.setState({ tabSelected });
    }
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <HeaderTabChild text='專屬於我' name='belongToMe' tabSelected={this.state.tabSelected} onPress={(tabName) => this._onTabSelect(tabName)} />
                <HeaderTabChild text='熱門分類' name='hotCategory' tabSelected={this.state.tabSelected} onPress={(tabName) => this._onTabSelect(tabName)} />
                <HeaderTabChild text='最近發行' name='newPublish' tabSelected={this.state.tabSelected} onPress={(tabName) => this._onTabSelect(tabName)} />
                {/*<View style={child}>
                    <Text style={textStyle}>熱門分類</Text>
                </View>
                <View style={child}>
                    <Text style={textStyle}>最近發行</Text>
                </View>*/}
            </View>
        );
    }
}
const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        marginTop: 10
    }
};
