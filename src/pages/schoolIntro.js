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
  constructor(props) {
    super(props);
    this.state = {youtubeActive: true};
  }

  backHome(){
    this.setState({youtubeActive: false});
    Actions.home();
  }

  renderYoutube(){
    if(this.state.youtubeActive == true){
      return(
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

            style={{ width: '90%', height: "83%", marginTop: "-15%", marginLeft: "-6%" }}
          />
      )
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <ImageBackground style = {{width: '106%',height: "101%", justifyContent: 'center', alignItems: 'center', marginLeft: "6%", marginTop: "-2%"}} source={require('../images/background2.png')}>
          <TouchableOpacity style= {{marginTop: "0%", marginLeft: "75%"}} onPress={this.backHome.bind(this)}>
              <Image
                style={{height: "33%", resizeMode: "contain"}}
                source={require('../images/menu.png')}
              />
            </TouchableOpacity>
          {this.renderYoutube()}
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