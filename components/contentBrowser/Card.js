import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Layout from '../../constants/Layout';

// props 從上到下順序排
class Card extends Component {
    constructor(props) {
        super(props);
        // this.props.coverType || (this.props.coverType = 'normal');
        // this.props.coverType = 'normal';
        // coverType: below, half
        // normal: coverIcon, title, description, footer
        // below: coverIcon, title, footer
        // half: coverIcon, title, footer => mask half
    }
    static propTypes = {
        coverType: React.PropTypes.oneOf(['normal', 'below', 'half']),
    };
    static defaultProps = {
        coverType: 'normal'
    };
    _renderCover() {
        console.log('_renderCover', this.props.coverType);
        if (this.props.coverType === 'normal') {
            return this._renderCoverNormal();
        } else if (this.props.coverType === 'below') {
            return this._renderCoverBelow();
        } else if (this.props.coverType === 'half') {
            return this._renderCoverHalf();
        }
    }
    _renderCoverNormal() {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={this.props.backgroundImage} blurRadius={5} />
                <View style={[styles.cover, { backgroundColor: (this.props.coverBackgroundColor || 'rgba(48, 34, 173, 0.5)') }]}>
                    <View>
                        <Image source={this.props.coverIcon} />
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: coverTextColor }}>{this.props.coverTitle}</Text>
                    </View>
                    <View>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 11, color: coverTextColor }}>{this.props.coverDetail}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 10, color: coverTextColor }}>{this.props.coverFooterLeft}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 10, color: coverTextColor }}>{this.props.coverFooterRight}</Text>
                        </View>
                    </View>
                </View>
            </View>            
        );
    }
    _renderCoverBelow() {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={this.props.backgroundImage} blurRadius={5} />
                <View style={[styles.cover, { backgroundColor: (this.props.coverBackgroundColor || 'rgba(48, 34, 173, 0.5)') }]}>
                    <View>
                        <Image source={this.props.coverIcon} />
                    </View>
                    <View>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: coverTextColor }}>{this.props.coverTitle}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 10, color: coverTextColor }}>{this.props.coverFooterLeft}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 10, color: coverTextColor }}>{this.props.coverFooterRight}</Text>
                        </View>
                    </View>
                </View>
            </View>            
        );        
    }
    _renderCoverHalf() {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={this.props.backgroundImage} />
                <View style={[styles.cover, { padding: 0 }]}>
                    <View style={{ flex: 3 }}>
                        <View style={{ backgroundColor: (this.props.coverBackgroundColor || 'rgba(48, 34, 173, 0.5)'), width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={this.props.coverIcon} />
                        </View>
                    </View>
                    <View style={[{ flex: 2 }, { backgroundColor: (this.props.coverBackgroundColor || 'rgba(48, 34, 173, 0.5)') }]}>
                        <View style={{ padding: 10, flex: 1, justifyContent: 'space-between' }}>
                            <View style={{ marginBottom: 5 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: coverTextColor }}>{this.props.coverTitle}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, color: coverTextColor }}>{this.props.coverFooterLeft}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, color: coverTextColor }}>{this.props.coverFooterRight}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>            
        );        
    }
    _renderDescTitle() {
        if (this.props.descTitle) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomColor: borderColor, borderBottomWidth: 1, paddingBottom: Layout.browserContent.textPadding, margin: 0 }}>
                    <Text>{this.props.descTitle}</Text>
                </View>
            );
        }
    }
    _renderDescDetail() {
        if (this.props.descDetail) {
            return (
                <View style={{ marginTop: 5 }}>
                    <Text style={{ color: 'rgb(120, 120, 120)', lineHeight: 16, textAlign: 'center', fontSize: 11 }}>{this.props.descDetail}</Text>
                </View>
            );
        }        
    }

    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                {this._renderCover()}
                <View style={styles.textContainer}>
                    {this._renderDescTitle()}
                    {this._renderDescDetail()}
                    {/* num of people */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Layout.browserContent.textPadding }}>
                        <Text style={{ color: 'rgb(120, 120, 120)', fontSize: 12, fontWeight: '100' }}>{this.props.descNumOfPeople}</Text>
                        <Text style={{ color: 'rgb(189, 10, 23)', fontSize: 14, fontWeight: 'bold', lineHeight: 15 }}>{this.props.descPoint}</Text>
                    </View> 
                </View>
            </View>
        );
    }
}

const coverTextColor = 'white';
const borderColor = 'rgb(208, 208, 208)';

const styles = {
    container: {
      width: Layout.browserContent.cardWidth, 
      // height: 300, // card 高度不固定 cover會隨著比例放大
      backgroundColor: 'white',

      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ddd',

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,

      overflow: 'hidden',

      marginBottom: Layout.browserContent.cardMarginBottom,
      marginRight: Layout.browserContent.marginBetweenCard, // 因為Section的margin是16，所以不會影響到... 但這樣有問題

      // padding: 10,
    },
    imageContainer: {
        width: Layout.browserContent.cardWidth, 
        height: 240, 
        position: 'relative'
    },
    image: {
      // 圖的大小，延伸到parent view大小
      flex: 1, 
      width: null, 
      height: null, 
      resizeMode: 'cover',

      // borderTopLeftRadius: 10,
      // borderTopRightRadius: 10
    },
    cover: {
        position: 'absolute', 
        left: 0, 
        top: 0, 
        // backgroundColor: 'rgba(48, 34, 173, 0.5)', 
        width: Layout.browserContent.cardWidth, 
        height: 240, 
        flex: 1, 
        margin: 0, 
        padding: 10, 
        justifyContent: 'space-between'
    },
    textContainer: {
        // height: 80, // text container 高度根據內容變高
        padding: Layout.browserContent.textPadding
    }
};
export default Card;
