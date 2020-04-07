import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import ForgotPassWord from './screens/ForgotPassWord'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import {  createAppContainer,createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import FireBase from './FireBase/FireBase';
import * as firebase from 'firebase';
import Profile from './screens/Profile';
import  {createDrawerNavigator} from 'react-navigation-drawer';
import Drawernav from "./Navigation/DrawerStack";
import DrawerButton from"./components/DrawerButton"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     };
     firebase.initializeApp(FireBase.FirebaseConfig)
   
    }
     
   
      
  render(){
     
  return (
    <AppContainer />
  );
}
}
const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp,
    navigationOptions:{
      headerLeft:null
    }
  },
  ForgotPassword: {
    screen: ForgotPassWord,
    navigationOptions:{
      headerLeft:null
    }
  },
  profile:{
    screen:Profile
  },
  Appdata:{
    screen : Drawernav,
    navigationOptions:({navigation})=>({
      title:'My App',
     // headerLeft:<DrawerButton navigation={navigation}/>
    headerLeft:<DrawerButton navigation={navigation}/>
   
  }
    )
  }
  
});

  //const MainNavigation = createSwitchNavigator({
    //AppNavigator: AppNavigator,
    //HomeStack: HomeStack
  // You will use this.props.navigation.replace('HomeDrawer') after login process.
//})

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
