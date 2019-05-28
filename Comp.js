/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import testFunc from './test';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

type Props = {};
class Comp extends Component<Props> {
  componentDidMount = () => {
    this.yo();
    this.yo1();
  };

  yo = async () => {
    const { testFunc } = this.props; // error
    console.log('TCL: Comp -> yo -> testFunc', testFunc);
    // console.log('TCL: Comp -> yo -> this.props.testFunc', this.props.testFunc); // works fine
  };

  yo1 = () => {
    const { testFunc } = this.props;
    console.log('TCL: Comp -> testFunc', testFunc);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(
  store => ({ store }),
  { testFunc }
)(Comp);
