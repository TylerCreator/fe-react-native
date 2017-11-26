import React, { Component } from 'react'
import {Text,View,Button,TextInput} from 'react-native'
import { createUser } from "./apiFireBase";

class Auth extends Component{
  constructor(){
		super();
		this.state={
      isLoggined:false,
      login:'',
      password:'',
		}
  };

  render(){
    const {login,password} = this.state;
    return(
      <View style={{flex:1}}>
      <Text>
      Авторизация
     </Text>
 <Text>Введите логин</Text>
 <TextInput style = {{width: '100%',padding: 10}} onChangeText={(login) => this.setState({login})}
     value={login}/>
     <Text>Введите пароль</Text>
 <TextInput secureTextEntry style = {{width: '100%',padding: 10}} onChangeText={(password) => this.setState({password})}
     value={password}/>
    <Button title="Войти" onPress={()=>{createUser(login,password).then(()=>{this.props.successAuth()})}}/>
     </View>
    )
  }
}

export default Auth;