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
    song = new SoundPlayer('seats.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
  nextOne(){
    song.release();
    Actions.checkInSuc();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '108%', marginLeft: "-9%", marginTop: "-4%"}} source={require('../images/seats3.png')}>
          <TouchableOpacity style= {{marginTop: "30%", marginLeft: "21%"}} onPress={this.nextOne}>
              <Image
                style={{height: "30%", resizeMode: "contain", marginLeft: "32%", marginTop: "30%"}}
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