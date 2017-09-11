import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

const imagePedra = require('../../assets/images/pedra.png');
const imagePapel = require('../../assets/images/papel.png');
const imageTesoura = require('../../assets/images/tesoura.png');

export default class Icone extends Component {
  render() {
    if (this.props.escolha === 'Pedra') {
      return (
        <View style={styles.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={imagePedra} />
        </View>
      );
    } else if (this.props.escolha === 'Papel') {
      return (
        <View style={styles.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={imagePapel} />
        </View>
      );
    } else if (this.props.escolha === 'Tesoura') {
      return (
        <View style={styles.txtJogador}>
          <Text>{this.props.jogador}</Text>
          <Image source={imageTesoura} />
        </View>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  txtJogador: {
    alignItems: 'center'
  }
});
