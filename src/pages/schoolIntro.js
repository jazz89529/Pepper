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
import YouTube from 'react-native-youtube';

export default class App extends Component<{}> {

  backHome(){
    Actions.home();
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '100%',height: "100%", justifyContent: 'center', alignItems: 'center'}} source={require('../images/background2.png')}>
          <TouchableOpacity style= {{marginTop: "-1%", marginLeft: "78%"}} onPress={this.backHome}>
              <Image
                style={{height: "33%", resizeMode: "contain"}}
                source={require('../images/menu.png')}
              />
            </TouchableOpacity>
          <YouTube
            apiKey="AIzaSyAHFMbR5zaJ_E-CymYl-QFRrjPKuPCzpr8"
            videoId="vj_1DQxP2Gs"   // The YouTube video ID
            play={true}             // control playback of video with true/false
            fullscreen={true}       // control whether the video should play in fullscreen or inline
            loop={false}             // control whether the video should loop when ended

            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}

            style={{ width: '90%', height: "83%", marginTop: "-12%" }}
          />
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
    backgroundColor: 'rgb(251, 254, 255)'
  }

});