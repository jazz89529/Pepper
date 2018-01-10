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
import SoundPlayer from 'react-native-sound';//播聲音用

var song1 = null;//播聲音用
var song2 = null;//播聲音用
var song3 = null;//播聲音用

export default class App extends Component<{}> {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
      takePicIsNull: null,
      cameraActive: this.props.cameraActive //換頁過來 讓camera啟動
    };
  }

  componentWillMount(){
    setTimeout(this.playReady.bind(this), 1500);
  }

  playReady() {//播聲音用
    song1 = new SoundPlayer('ready.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song1.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      }
    });
  }
  playReadyToMail() {//播聲音用
    song1.release();
    song3.release();
    song2 = new SoundPlayer('readytomail.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song2.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      }
    });
  }
  playCountDown() {//播聲音用
    song1.release();
    song3 = new SoundPlayer('countdown.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if(error)
        ToastAndroid.show('Error when init SoundPlayer :(((', ToastAndroid.SHORT);
      else {
        song3.play((success) => {
          if(!success)
            ToastAndroid.show('Error when play SoundPlayer :(((', ToastAndroid.SHORT);
        });
      }
    });
  }

  onPressReturn(){
    if(song1 != null)
      song1.release();
    if(song2 != null)
      song2.release();
    if(song3 != null)
      song3.release();
    this.setState({cameraActive: 0});//跳出這頁面設為0 如此讓才可以讓render不會繼續保留著camera，以避免因為快速切換camera而導致的crash
    Actions.home();
  }

  CountDown(){
    if(this.state.takePicIsNull == 1){
      return (
        <CountdownCircle
            seconds={10}
            radius={500}
            borderWidth={20}
            color="#00000000"
            bgColor="#00000000"
            shadowColor="#00000000"
            textStyle={{ fontSize: 330, color: 'white', marginBottom: '-70%', marginLeft: '0%'}}
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

  renderCamera(){
    if(this.state.cameraActive == 1){
      return(
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            type={Camera.constants.Type.front}
            orientation={Camera.constants.Orientation.landscapeLeft}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            aspect={Camera.constants.Aspect.fill}>
            <TouchableOpacity style= {{marginLeft: "86%", marginBottom: "32%"}} onPress={this.onPressReturn.bind(this)}>
              <Image
                style={{height: "43%", resizeMode: "contain"}}
                source={require('../images/menu2.png')}
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
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCamera()}
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
        {text: '回到主畫面!', onPress: () => {Actions.home();song1.release();song2.release();song3.release();}, style: 'cancel'},
        {text: '重拍一張', onPress: () => console.log("Again!")},
        {text: '立刻寄信', onPress: () => this.handleEmail()}
      ],
      { cancelable: false }
    )
  }

  handleEmail = () => {
    song1.release();
    song2.release();
    song3.release();
    Mailer.mail({
            subject: '政大展場活動照片來囉～',
            //recipients: ['jazz89529@gmail.com'],
            recipients: ['jeff.lin@perobot.com.tw', 'jessica@hpicorp.com.tw', 'jay.cho@novartis.com', 'taoyalun@nccu.edu.tw','mtchics.nccu.edu.tw'],
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
