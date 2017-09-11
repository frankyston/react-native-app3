import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import Header from './src/components/header';
import Icone from './src/components/icone';

export default class app3 extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    const numberRandom = Math.floor((Math.random() * 3));
    const jokenpoArray = [];
    jokenpoArray[0] = 'Pedra';
    jokenpoArray[1] = 'Papel';
    jokenpoArray[2] = 'Tesoura';

    const escolhaComputador = jokenpoArray[numberRandom];
    let resultado = '';

    if (escolhaComputador === 'Pedra') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (escolhaUsuario === 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você perdeu';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você ganhou';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Você perdeu';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <Header />

        <View style={styles.wrapperActions}>
          <View style={styles.btnEscolha}>
            <Button title="Pedra" onPress={() => { this.jokenpo('Pedra'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="Papel" onPress={() => { this.jokenpo('Papel'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura'); }} />
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.txtResult}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  wrapperActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  content: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red'
  }
});

AppRegistry.registerComponent('app3', () => app3);
