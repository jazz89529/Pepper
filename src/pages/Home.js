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

  onPress1 = () => {
    Actions.checkIn();
  }

  onPress2 = () => {
    Actions.schoolIntro();
  }

  onPress3 = () => {
    Actions.camera({cameraActive: 1});
  }

  onPress4 = () => {
    Actions.wel();
  }
  
  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style={{width: "106%", marginLeft: "6%", height: "101%", justifyContent: 'center',marginTop: "-2%"}} 
            source={require('../images/background2.png')}>
          <View style={{marginLeft: "8%", marginBottom: "5%", marginTop: "5%"}}>
            <View style={{flexDirection: 'row', marginBottom: "-38%", marginTop: '3%'}}>
              <TouchableOpacity style={{width: "42%", height: "66%"}} onPress={this.onPress1}>
                <Image
                  style={{width: "100%", height: "100%", resizeMode: 'contain'}}
                  source={require('../images/Q1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{width: "42%", height: "66%"}} onPress={this.onPress2}>
                <Image
                  style={{width: "100%", height: "100%", resizeMode: 'contain'}}
                  source={require('../images/Q2.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginBottom:"0%"}}>
              <TouchableOpacity style={{width: "42%", height: "66%"}} onPress={this.onPress3}>
                <Image
                  style={{width: "100%", height: "100%", resizeMode: 'contain'}}
                  source={require('../images/Q3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{width: "42%", height: "66%"}} onPress={this.onPress4}>
                <Image
                  style={{width: "100%", height: "100%", resizeMode: 'contain'}}
                  source={require('../images/Q4.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor: 'rgb(251, 254, 255)'
  }

});