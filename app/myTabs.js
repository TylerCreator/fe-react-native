import {TabNavigator} from "react-navigation";
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
//import your tabs js file
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

var myTabs = TabNavigator(
  {
	// here you will define your screen-tabs
  Events: {
    screen:Screen1,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <MaterialIcons size={22} name="event" color={tintColor} />,
    }),},
	Map: {screen:Screen2},
	Create: {screen:Screen3}
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
  }
  });

export default myTabs;