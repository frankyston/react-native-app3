import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

const image = require('../../assets/images/jokenpo.png');

export default class Header extends Component {
  render() {
    return (
      <View>
        <Image source={image} />
      </View>
    );
  }
}
