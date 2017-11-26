import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  RefreshControl,
  Text,
  View,Button,Picker,
  FlatList,
  TouchableOpacity, Image,
} from 'react-native';

import axios from 'axios';
import { getEvents } from "./apiFireBase";

export default class screen1 extends Component {
	constructor(){
		super();
		this.state={
			PickerValue:'',
      data:[],
      loading: true,
      refreshing: false,
		}
		
  };

  componentWillMount() {
    getEvents((events) => this.setState({ events }));
  }

  getEv() {
    axios.get('http://api.hochuna.com/open-events').then(function (response) {
      console.log(response);
    });
  }
	clickme=()=>{
		var data = this.state.PickerValue;
		if(data==""){
			alert("Please Select a Option");  
		}else{
			alert(data);
		}
		
  }
  
  _onRefresh() {
    this.setState({ refreshing: true });
    getEv().then(() => {
      this.setState({ refreshing: false });
    });
  }

  render() {
    const { loading, events } = this.state;
    console.log("DTDBG: events", events);
    return (
      <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        data={events || []}t
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              style={{
                flex: 1,
                height: 100,
                resizeMode: "cover",
              }}
              source={{uri: 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'}}
              />
            <Text>{item && item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
  }
});