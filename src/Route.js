import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';
import Camera from './pages/camera'
import SchoolIntro from './pages/schoolIntro'
import CheckIn from './pages/checkIn'
import Seats from './pages/seats'
import CheckInSuc from './pages/checkInSuc'
import Wel from './pages/game/wel'
import Q1 from './pages/game/q1'
import Q2 from './pages/game/q2'
import Q3 from './pages/game/q3'
import Q4 from './pages/game/q4'
import A1 from './pages/game/a1'
import A2 from './pages/game/a2'
import A3 from './pages/game/a3'
import A4 from './pages/game/a4'
import Score from './pages/game/score'



export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="home" component={Home} title="Home" initial={true}/>
			      <Scene key="camera" component={Camera} title="Camera"/>
			      <Scene key="schoolIntro" component={SchoolIntro} title="SchoolIntroduction"/>
			      <Scene key="checkIn" component={CheckIn} title="CheckIn"/>
			      <Scene key="seats" component={Seats} title="Seats"/>
			      <Scene key="checkInSuc" component={CheckInSuc} title="CheckInSuc"/>
			      <Scene key="wel" component={Wel} title="Wel"/>
			      <Scene key="q1" component={Q1} title="Q1"/>	
			      <Scene key="q2" component={Q2} title="Q2"/>
			      <Scene key="q3" component={Q3} title="Q3"/>
			      <Scene key="q4" component={Q4} title="Q4"/>
			      <Scene key="a1" component={A1} title="A1"/>	
			      <Scene key="a2" component={A2} title="A2"/>
			      <Scene key="a3" component={A3} title="A3"/>
			      <Scene key="a4" component={A4} title="A4"/>		
			      <Scene key="score" component={Score} title="Score"/>			      
			    </Stack>
			 </Router>
			)
	}
}