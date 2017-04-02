import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MapView extends Component {
  static get defaultProps(){
    return{
      title: 'MyScene'
    };
  }

  render(){
    return (
      <View>
        <Text> a </Text>
      </View>
    )
  }
}
