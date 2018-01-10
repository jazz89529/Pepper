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
let scorePara;
export default class App extends Component<{}> {
  componentWillMount(){
    this.onPressButtonPlay();
    setTimeout(this.changePage.bind(this), 11000);
  }

  onPressButtonPlay() {
    song = new SoundPlayer('score1.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
    song.release();
    Actions.home();
  }

  backHome(){
    song.release();
    Actions.home();
  }

  render() {
    return (
      <View style={ styles.container }>
         <ImageBackground style = {{width: '106%',height: "101%", marginLeft: "0%", marginTop: "-2%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/score1.png')}>
          <TouchableOpacity style= {{marginTop: "-39%", marginLeft: "80%"}} onPress={this.backHome}>
            <Image
              style={{height: "30%", resizeMode: "contain"}}
              source={require('../../images/menu.png')}
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(30, 177, 237)',
    padding: 36,
    paddingTop: 53,
    paddingBottom: 53,
    marginLeft: "15%"
  },
  ans: {
    color: 'black',
    fontSize: 300,
    marginTop: "-15%",
    marginLeft: "15%"
  }

});