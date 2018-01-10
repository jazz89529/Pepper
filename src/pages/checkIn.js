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
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    song = new SoundPlayer('qrcode.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      }
    });
    setTimeout(this.changePage.bind(this), 6500);
  }

  changePage(){
    Actions.seats();
  }

  render() {
    return (
      <View style={ styles.container }>
        <Image style = {{width: '115%', height: '1125%', resizeMode: 'contain'}} source={require('../images/qrcode.gif')} />
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