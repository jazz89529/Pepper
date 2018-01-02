/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class App extends Component<{}> {
  componentWillMount(){
    setTimeout(this.changePage.bind(this), 3000);
  }

  changePage(){
    Actions.seats();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image style = {{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../images/qrcodeGif.gif')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(154, 211, 214)'
  }

});