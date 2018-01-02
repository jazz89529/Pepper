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
import SoundPlayer from 'react-native-sound';

var song = null;

export default class App extends Component<{}> {
  componentWillMount(){
    this.onPressButtonPlay();
    setTimeout(this.changePage.bind(this), 16000);
  }

  onPressButtonPlay() {
    song = new SoundPlayer('wel.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      }
    });
  }

  changePage(){
    if(Actions.currentScene=='wel')
      Actions.q1();
  }

  backHome(){
    Actions.home();
  }
  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%"}} source={require('../../images/background2.png')}>
          <TouchableOpacity style= {{alignItems: 'flex-end'}} onPress={this.backHome}>
            <Image
              style={{height: "33%", resizeMode: "contain"}}
              source={require('../../images/menu.png')}
            />
          </TouchableOpacity>
          <View style={{marginTop: '6%', alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: 'black'}}>歡迎來到校史快問快答</Text>
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
    backgroundColor: 'rgb(154, 211, 214)'
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }

});