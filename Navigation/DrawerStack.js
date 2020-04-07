import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity,ScrollView,SafeAreaView } from "react-native";
import {  createAppContainer,createSwitchNavigator } from "react-navigation";
import * as firebase from 'firebase';

import { createDrawerNavigator,DrawerItems } from "react-navigation-drawer";
import Home from "../screens/Home";
import Profile from "../screens/Profile"

const Drawernav = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <DrawerItems {...props} />
    </SafeAreaView>
    <Button
      style={styles.logoutButton}
      title="Logout"
      onPress={() =>{
        firebase.auth().signOut();
          props.navigation.navigate('Login')} }/>
  </ScrollView>
);

export default createDrawerNavigator({
  Home:{
      screen:Home,
      navigationOptions:{
        headerLeft:null
      }
  },
  Profile:{
      screen:Profile
  }
}, {
  // other settings
  contentComponent: Drawernav
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logoutButton: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0
  }
});
