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
  }

  onPressButtonPlay() {
    song = new SoundPlayer('q2.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
    Actions.a2();
  }

  ans2(){
    Actions.a2();
  }

  ans3(){
    Actions.a2();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/background2.png')}>
          <Text style={{fontSize: 30, marginTop: '10%', color: 'black', marginLeft: "6%"}}>請問政治大學第一位校長是誰？
          </Text>
          <View style={{ width: "40%", flexDirection: 'row', marginTop: "10%", marginLeft: "-30%"}}>
            <View style={{flexDirection: 'column', width: "60%", alignItems: 'center'}}>
              <TouchableOpacity style= {styles.button} onPress={this.ans1}>
                <Text style={styles.ans}>周行一
                </Text>
              </TouchableOpacity>
              <Image
              source={require('../../images/chou.png')}
              style={styles.image}
              />
            </View>

            <View style={{flexDirection: 'column', width: "60%", alignItems: 'center'}}>
              <TouchableOpacity style= {styles.button} onPress={this.ans2}>
                <Text style={styles.ans}>吳思華
                </Text>
              </TouchableOpacity>
              <Image
              source={require('../../images/wu.png')}
              style={styles.image}
              />
            </View>
            <View style={{flexDirection: 'column', width: "60%", alignItems: 'center'}}>
              <TouchableOpacity style= {styles.button} onPress={this.ans3}>
                <Text style={styles.ans}>蔣中正
                </Text>
              </TouchableOpacity>
              <Image
              source={require('../../images/jiang.png')}
              style={styles.image}
              />
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
    padding: 35,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: "5%",
    marginTop: "-15%"
  },
  ans: {
    color: 'white',
    fontSize: 19
  },
  image: {
    height: "50%",
    resizeMode: 'contain', 
    marginBottom: "-20%",
    marginTop: "5%"

  }

});