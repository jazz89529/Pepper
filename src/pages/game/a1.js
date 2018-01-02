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
    setTimeout(this.changePage.bind(this), 4500);
  }

  onPressButtonPlay() {
    song = new SoundPlayer('a1.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
    if(Actions.currentScene=='a1')
      Actions.q2();
  }

  backHome(){
    Actions.home();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/background2.png')}>
          <TouchableOpacity style= {{marginTop: "-4%", marginLeft: "80%"}} onPress={this.backHome}>
            <Image
              style={{height: "32%", resizeMode: "contain"}}
              source={require('../../images/menu.png')}
            />
          </TouchableOpacity>

          <Text style={{fontSize: 30, color: 'black', marginLeft: "-42%", marginTop: "-7%"}}>答案是：
          </Text>
          <View style={{ width: "35%", marginTop: "5%", marginLeft: "-5%"}}>
            <TouchableOpacity style= {styles.button}>
              <Text style={styles.ans}>中央政治學校
              </Text>
            </TouchableOpacity>
            <Text style={{marginLeft: "28%", marginTop: "10%", color: 'black', fontSize: 22}}>你答對了嗎？
            </Text>
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(30, 177, 237)',
    padding: 15,
    paddingTop: 42,
    paddingBottom: 42,
    marginLeft: "15%"
  },
  ans: {
    color: 'white',
    fontSize: 19
  }

});