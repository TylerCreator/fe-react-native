
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,Picker
} from 'react-native';

import axios from 'axios'


axios.get('http://api.hochuna.com/open-events').then(response => {
  console.log(response.data)
  // .data is specific to axios and required to recall the correct information
  // tells the computer to fetch, and upon return perform the next task
}).catch(response => {
  console.log("oh no, an error: " + response.message)
})


export default class screen2 extends Component {
	constructor(){
		super();
		this.state={
			PickerValue:''
			
    };
    
		
  };
  getEv() {
    axios.get('http://api.hochuna.com/open-events').then(function (response) {
      console.log(response);
    });
  }
	clickme=()=>{
    this.getEv();
		var data = this.state.PickerValue;
		if(data==""){
			alert("Please Select a Option");
		}else{
			alert(data);
		}
		
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Screen 1
         
        </Text>
		<Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		<Picker.Item label="Select a option" value=""/>
		<Picker.Item label="Html" value="html" />
		<Picker.Item label="Javascript" value="javascript"/>
		</Picker>
		<Button title="Click me" onPress={() =>this.clickme()}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});