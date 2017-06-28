// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Colors from '../../constants/Colors';
import HeaderTab from './HeaderTab';

// Make a component
const Header = (props) => {
    const { container, image, category, categoryChild, textStyle } = styles;

    return (
        <View style={container}>
            <Image style={image} source={require('../../../assets/icons/Browsing_category.png')} />
            <HeaderTab />
            <Image style={image} source={require('../../../assets/icons/Browsing_search.png')} />
        </View>
    );
};

const styles = {
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,

        backgroundColor: '#F8F8F8',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        elevation: 2,
    },
    image: {
        margin: 10
    }
};

// Make the component available to other parts of the app
export default Header;
