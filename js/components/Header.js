/*
    Title & DrawerOpen
*/
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Make a component
const Header = ({ title, navigation }) => {
    const { container } = styles;

    return (
        <View style={container}>
            <TouchableOpacity style={styles.iconBars} onPress={() => navigation.navigate('DrawerOpen')}>
                 <Icon name="bars" size={30} color="grey" />
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                 <Icon name="bars" size={30} color='#F8F8F8' />
            </View>
        </View>
    );
};

const styles = {
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        height: 60,
        paddingTop: 23,

        backgroundColor: '#F8F8F8',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    iconBars: {
        marginLeft: 10,
    }
};

// Make the component available to other parts of the app
export default Header;
