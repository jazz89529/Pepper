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
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';
import Mailer from 'react-native-mail';
import {Actions} from 'react-native-router-flux';
import CountdownCircle from 'react-native-countdown-circle';
import SoundPlayer from 'react-native-sound';

var song = null;

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
      takePicIsNull: null
    };
  }

  componentWillMount(){
    this.playReady();
  }

  playReady() {
    song = new SoundPlayer('ready.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
  playReadyToMail() {
    song = new SoundPlayer('readytomail.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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
  playCountDown() {
    song = new SoundPlayer('countdown.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
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



  onPressReturn(){
    Actions.home();
  }

  CountDown(){
    if(this.state.takePicIsNull == 1){
      return (
        <CountdownCircle
            seconds={10}
            radius={500}
            borderWidth={10}
            color="#00000000"
            bgColor="#00000000"
            shadowColor="#00000000"
            textStyle={{ fontSize: 220, color: 'white', marginBottom: '-78%', marginLeft: '1%'}}
            onTimeElapsed={() => { 
              this.setState({takePicIsNull: 0});
              this.playReadyToMail();
              this.takePic();
            }}
        />
      );
    }
    else return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={Camera.constants.Type.front}
          orientation={Camera.constants.Orientation.landscapeLeft}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableOpacity style= {{marginLeft: "81%", marginBottom: "26%"}} onPress={this.backHome}>
            <Image
              style={{height: "43%", resizeMode: "contain"}}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
          {this.CountDown()}
          <TouchableOpacity style= {{marginBottom: "-16%"}} onPress={this.takePictureTimer.bind(this)}>
            <Image
              style={{height: "45%", resizeMode: "contain"}}
              source={require('../images/cam2.png')}
            />
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }

  onBarCodeRead(e) {
    Alert.alert(
      'QRcode',
      e.data,
      [
        {text: '回到主畫面', onPress: () => Actions.home()},
      ],
      { cancelable: false }
    )
    console.log("Barcode!!!!");
  }

  takePictureTimer() {
    this.playCountDown();
    this.setState({takePicIsNull: 1})
  }

  takePic(){
     const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
        this.setState({path: data.path.slice(8)})
        this.emailAlert();
        console.log("takePic");
      })
      .catch(err => console.error(err));

  }

  emailAlert(){
    Alert.alert(
      '照片快遞小幫手',
      '拍照完畢，現在立即將照片寄送至您的信箱？',
      [ 
        {text: '回到主畫面!', onPress: () => Actions.home(), style: 'cancel'},
        {text: '重拍一張', onPress: () => console.log("Again!")},
        {text: '立刻寄信', onPress: () => this.handleEmail()}
      ],
      { cancelable: false }
    )
  }

  handleEmail = () => {
    Mailer.mail({
            subject: '政大展場活動照片來囉～',
            recipients: ['jazz89529@gmail.com'],
            //recipients: ['jazz89529@gmail.com', '106753007@mail2.nccu.tw'],
            body: '<b>這是您參加政大活動的照片喔！</b>',
            isHTML: true,
            attachment: {
              path: this.state.path,  // The absolute path of the file from which to read data.
              type: 'png',   // Mime Type: jpg, png, doc, ppt, html, pdf
              name: 'Photo',   // Optional: Custom filename for attachment
            }
          }, (error, event) => {
            Alert.alert(
              error,
              event,
              [
                {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
              ],
              { cancelable: true }
            )
          });
  }

  backHome(){
    Actions.home();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    fontSize: 20,
  }
});
