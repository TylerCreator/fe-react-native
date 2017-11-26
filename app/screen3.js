
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,
  TextInput,
} from 'react-native';
import { addEvent } from "./apiFireBase";
import MapView from 'react-native-maps';

export default class screen3 extends Component {
	constructor(){
		super();
		this.state={
      title:'',
      description:'',
      events: [],
		}
		
  };
  
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }

	clickme=(_title, _description,_region)=>{
    addEvent({title:_title,address:_description,region:_region});
	}
  render() {
   const {title,description,region} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Добавление мероприятия
        </Text>
    <Text>Введите заголовок</Text>
    <TextInput style = {{width: '100%',padding: 10}} onChangeText={(title) => this.setState({title})}
        value={title}/>
        <Text>Введите описание</Text>
    <TextInput style = {{width: '100%',padding: 10}} onChangeText={(description) => this.setState({description})}
        value={description}/>    
        <MapView
        style={{display: 'flex'}}
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
		<Button style={{marginTop: 10}}title="Добавить" onPress={() =>this.clickme(title,description,region)}/>
        
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