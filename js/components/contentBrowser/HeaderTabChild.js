// Import libraries for making a component
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

// Make a component
export default class HeaderTabChild extends Component {
    constructor(props) {
        super(props); // name, text
        this.state = { selected: false };
    }
    _tabBorderStyle() {
        const containerStyle = {
            borderBottomWidth: 0,
            
            margin: 10,
            paddingBottom: 10,

            borderBottomColor: Colors.tabIconSelected
        };
        if (this.state.selected) {
            containerStyle.borderBottomWidth = 3;
        }
        return containerStyle;
    }
    _tabTextStyle() {
        const textStyle = {
            fontSize: 12,
            color: headerTextColor
        };
        if (this.state.selected) {
            textStyle.color = Colors.tabIconSelected;
        }
        return textStyle;
    }
    _onSelect() {
        this.props.onPress(this.props.name);
        // this.setState({ selected: !this.state.selected });
    }
    _toSelect(tabSelected) {
        if (this.props.name === tabSelected) {
            this.setState({ selected: true });
        } else {
            this.setState({ selected: false });
        }
    }
    componentWillMount() {
        this._toSelect(this.props.tabSelected);
    }
    componentWillReceiveProps(newProps) {
        this._toSelect(newProps.tabSelected);
    }
    render() {
        
        const name = this.props.name;
        return (
            <TouchableOpacity style={this._tabBorderStyle()} onPress={() => { this._onSelect(); }}>
                <Text style={this._tabTextStyle()}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
const headerTextColor = 'rgb(84, 84, 84)';
