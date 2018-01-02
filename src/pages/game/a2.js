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
    song = new SoundPlayer('a2.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
    if(Actions.currentScene=='a2')
      Actions.q3({ans: this.props.ans});
  }

  backHome(){
    Actions.home();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/background2.png')}>
          <TouchableOpacity style= {{marginTop: "3%", marginLeft: "80%"}} onPress={this.backHome}>
            <Image
              style={{height: "32%", resizeMode: "contain"}}
              source={require('../../images/menu.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 30, color: 'black', marginLeft: "-42%", marginTop: "-5%"}}>答案是：
          </Text>
          <View style={{ width: "35%", marginTop: "3%", marginLeft: "-5%"}}>
            <View style={{ flexDirection: "row", height: "40%", justifyContent: 'center'}}>
              <TouchableOpacity style= {styles.button}>
                <Text style={styles.ans}>蔣中正
                </Text>
              </TouchableOpacity>
              <Image
                source={require('../../images/jiang.png')}
                style={{width: "50%", resizeMode: "contain", marginTop: "-41%", marginLeft: "10%"}}
              />
            </View>

            <Text style={{marginLeft: "28%", marginTop: "25%", color: 'black', fontSize: 22}}>你答對了嗎？
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
    padding: 50,
    paddingTop: 53,
    paddingBottom: 53,
    marginLeft: "15%"
  },
  ans: {
    color: 'white',
    fontSize: 21,
    marginTop: "40%"
  }

});