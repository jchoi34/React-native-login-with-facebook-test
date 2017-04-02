import React, {Component} from 'react';
import Wallpaper from './src/components/Wallpaper';
import LoginButton from './src/components/LoginButton';
import Logo from './src/components/Logo';
import MapView from './src/components/MapView';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Navigator} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {LoginManager} = FBSDK;

export default class Apire extends Component {
  constructor(props){
    super(props);
    this.state= {loggedIn: false}
  }
  
    render() {
        return (
            <Wallpaper>
                  <Logo/>
                    <LoginButton/>
            </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('Apire', () => Apire);
