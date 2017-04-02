import React, { Component } from 'react';
import{
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import logo from '../images/logo.png';

export default class Logo extends Component {
      render(){
        return(
            <View style={styles.container}>
                <Image source ={logo} style={styles.image} />
                <Text style={styles.text}>Apire</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems:'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: 'white',
        fontWeight: 'normal',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize: 17,
    }
});
