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
    scorePara = this.props.ans
  }

  onPressButtonPlay() {
    song = new SoundPlayer('q3.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
    song.release();
    Actions.a3({ans: scorePara});
  }

  ans2(){
    song.release();
    Actions.a3({ans: scorePara});
  }

  ans3(){
    scorePara += 1;
    song.release();
    Actions.a3({ans: scorePara});
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '106%',height: "101%", marginLeft: "6%", marginTop: "-2%", justifyContent: 'center', alignItems: 'center'}} source={require('../../images/background2.png')}>
          <Text style={{fontSize: 50, marginTop: '10%', color: 'black', marginLeft: "-3%"}}>請問以下地點學生到達不需要辛苦的爬山？
          </Text>
          <View style={{ width: "40%", flexDirection: 'row', marginTop: "10%", marginLeft: "-37%"}}>
            <View style={{flexDirection: 'column', width: "60%", alignItems: 'center'}}>
              <TouchableOpacity style= {styles.button} onPress={this.ans1}>
                <Text style={styles.ans}>傳播學院
                </Text>
              </TouchableOpacity>
              <Image
              source={require('../../images/spread.png')}
              style={styles.image}
              />
            </View>

            <View style={{flexDirection: 'column', width: "60%", alignItems: 'center'}}>
              <TouchableOpacity style= {styles.button} onPress={this.ans2}>
                <Text style={styles.ans}>文學院
                </Text>
              </TouchableOpacity>
              <Image
              source={require('../../images/art.png')}
              style={styles.image}
              />
            </View>
            <View style={{flexDirection: 'column', width: "60%", alignItems: 'center'}}>
              <TouchableOpacity style= {styles.button} onPress={this.ans3}>
                <Text style={styles.ans}>四維堂
                </Text>
              </TouchableOpacity>
              <Image
              source={require('../../images/four.png')}
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
    width: "85%",
    paddingTop: 40,
    paddingBottom: 40,
    marginLeft: "5%",
    marginTop: "-15%",
  },
  ans: {
    color: 'white',
    fontSize: 30
  },
  image: {
    height: "45%",
    resizeMode: 'contain', 
    marginBottom: "-20%",
    marginTop: "5%",
    marginLeft: "5%"
  }

});