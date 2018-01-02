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

  componentWillMount() {
    this.onPressButtonPlay();
  }

  onPressButtonPlay() {
    song = new SoundPlayer('q1.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
  
  backHome(){
    Actions.home();
  }

  ans1(){
    Actions.a1();
  }

  ans2(){
    Actions.a1();
  }

  ans3(){
    Actions.a1();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/background2.png')}>
          <Text style={{fontSize: 30, marginTop: '-10%', color: 'black'}}>請問國立政治大學的前身是？
          </Text>
          <View style={{ width: "40%", flexDirection: 'row', marginLeft: "-64%", marginTop: "10%"}}>
            <TouchableOpacity style= {styles.button} onPress={this.ans1}>
              <Text style={styles.ans}>中央政治學校
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button} onPress={this.ans2}>
              <Text style={styles.ans}>地方政治學校
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.button} onPress={this.ans3}>
              <Text style={styles.ans}>南方政治學校
              </Text>
            </TouchableOpacity>
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
    padding: 23,
    paddingTop: 18,
    paddingBottom: 18,
    marginLeft: "15%"
  },
  ans: {
    color: 'white',
    fontSize: 19
  }

});