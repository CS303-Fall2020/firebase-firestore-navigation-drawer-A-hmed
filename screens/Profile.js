import React, { Component } from "react";
import { View, Image, Text, Button, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';
import AppData from '../AppData';
class Profile extends Component {
   state = {
      email: "",
      password: ""
   }

      
     

      render(){
         return(
        
                      
            <View>
                <Text>  Name is {AppData.UserName}</Text>
            </View>
            
             );
     }
}

export default Profile;

const styles = StyleSheet.create({
   ButtonsStyle: {
      marginTop: 20


   },
   HeaderStyle: {
      backgroundColor: 'orange'
      , padding: 10
   },
   headertext: {
      textAlign: "left",
      fontSize: 30
      , color: 'white'
   },
   textInputStyle: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,

   },
   text: {
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderColor: 'black',
      backgroundColor: 'red'
   }
});