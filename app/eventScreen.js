import React, { Component } from "react";
import { View, Text } from "react-native";

class EventScreen extends Component {
  render() {
    const { event } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text>
          { event.title }  { event.description } 
        </Text>
      </View>
    );
  }
}

export default EventScreen;