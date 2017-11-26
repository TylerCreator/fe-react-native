import { AppRegistry } from 'react-native';
import App from './myTabs';
import Auth from './auth';
import React, { Component } from 'react'
import {View} from 'react-native'

class Main extends Component{
	constructor(){
		super();
		this.state={
			isLoggined:false,
		}
  };
render(){
 const {isLoggined} = this.state;
  return(
  <View style={{flex:1}}>{isLoggined?<App/>:<Auth successAuth = {()=>{this.setState({isLoggined:true})}}/>}</View>
  )
}
}

AppRegistry.registerComponent('testApp', () => Main);
