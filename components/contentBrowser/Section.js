import React from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '../../constants/Layout';

const Section = ({ header, height, children }) => {
    const heightObj = { height };
    return (
        <View style={[styles.container, heightObj]}>
            <Text style={styles.header}>{header}<Image style={{ marginLeft: 8 }} source={require('../../assets/icons/Browsing_arrow.png')} /></Text>
            <View style={styles.cardContainer}>{children}</View>
        </View>
    );
};

const styles = {
    container: {
      marginLeft: Layout.browserContent.sectionMargin, 
      marginRight: Layout.browserContent.sectionMargin, 
      marginTop: Layout.browserContent.sectionMargin, 
      // 最下邊的底線
      paddingBottom: Layout.browserContent.sectionMargin, 
      borderBottomColor: 'rgb(208, 208, 208)', 
      borderBottomWidth: 1,
    },
    header: {
        fontSize: 18, 
        color: 'rgb(180, 180, 180)', 
        marginBottom: 15,
        fontWeight: 'bold'
    },
    cardContainer: {
        flexDirection: 'column',
        // alignContent: ''
        // justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
};
export default Section;
