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
    setTimeout(this.changePage.bind(this), 11000);
  }

  onPressButtonPlay() {
    song = new SoundPlayer('right4.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
    Actions.home();
  }

  backHome(){
    Actions.home();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/background2.png')}>
          <TouchableOpacity style= {{marginTop: "-1%", marginLeft: "82%"}} onPress={this.backHome}>
            <Image
              style={{height: "30%", resizeMode: "contain"}}
              source={require('../../images/menu.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 30, color: 'black', marginLeft: "-50%", marginTop: "-8%"}}>恭喜您答對：
          </Text>
          <View style={{flexDirection: 'row', marginLeft: "35%", marginTop: "3%"}}>
            <Text style={styles.ans}>4
            </Text>
            <Text style={{color: 'black', fontSize: 50, marginTop: "28%", marginRight: "-70%"}}>題
            </Text>
            <Image
              style={{height: "37%", resizeMode: "contain", marginTop: "10%"}}
              source={require('../../images/star.png')}
            />
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
    padding: 36,
    paddingTop: 53,
    paddingBottom: 53,
    marginLeft: "15%"
  },
  ans: {
    color: 'black',
    fontSize: 210,
    marginTop: "-17%",
    marginLeft: "30%"
  }

});