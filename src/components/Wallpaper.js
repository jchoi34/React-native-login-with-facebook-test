import React, {Component} from 'react';

import {StyleSheet, Image} from 'react-native';

import background from '../images/background.jpg'

export default class Wallpaper extends Component {
    render() {
        return (
            <Image style ={styles.picture} source ={background}>
                {this.props.children}
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
