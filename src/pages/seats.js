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
  nextOne(){
    Actions.checkInSuc();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '105%', marginLeft: "-5%", marginTop: "-4%"}} source={require('../images/seats2.png')}>
          <TouchableOpacity style= {{marginTop: "30%", marginLeft: "20%"}} onPress={this.nextOne}>
              <Image
                style={{height: "30%", resizeMode: "contain", marginLeft: "25%", marginTop: "20%"}}
                source={require('../images/checkInButton.png')}
              />
          </TouchableOpacity>
        </ImageBackground>
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