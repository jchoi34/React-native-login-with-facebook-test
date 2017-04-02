import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import{
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {LoginManager} = FBSDK;
const MARGIN = 45;

export default class LoginButton extends Component{
  constructor() {
		super();

		this._onPress = this._onPressButton.bind(this);
	}
  _onPressButton() {
      LoginManager.logInWithReadPermissions(['public_profile, user_friends, email']).then(function(result) {
          if (!result.isCancelled) {
              alert('Login was successful with permissions: ' + result.grantedPermissions.toString());
          }
      }, function(error) {
          alert('Login failed with error: ' + error);
      });
  }
  render(){
    return(
      <View style ={styles.container}>
        <TouchableOpacity style = {styles.button}
          onPress ={this._onPressButton}
          activeOpacity={0.5} >
          <Text style={styles.text}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e90ff',
        height: MARGIN,
        width: 300,
        borderRadius: 100,
        zIndex: 300,
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 18,
    },
});
