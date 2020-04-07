import React ,{Component}from "react";
import { Modal, View, Image, Text, Button, StyleSheet, TextInput, Alert,TouchableOpacity } from "react-native";

import * as firebase from 'firebase';
import Username from '../AppData';

class SignUp extends Component{
   state={
     
      email:"",
      password:"",
      passwordconiform:""
   }
   
   
   SignUpOnPress=()=>{
      if(this.state.password===this.state.passwordconfirm){
         firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
    
            Username.UserName=this.state.email;
            
                      firebase.firestore().collection("users").doc(this.state.email).set({
                         
                         email:this.state.email
                         
                      }).catch(function(error) {
                       console.error("Error adding documentssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss: ", error);
                       
                     
                   })
                   this.props.navigation.navigate('Home')
            this.setState({
               email:"",
               password:"",
               passwordconiform:""
           })
          
          
         },(error)=>{Alert.alert(error.message)})
     }else{
         Alert.alert("passwords does not match");
        
     }
   
      
   }
   
   LoginOnPress=()=>{
   
      this.props.navigation.navigate('Login')
   
   }
   ForgotPasswordPress=()=>{
   
      this.props.navigation.navigate('ForgotPassword')
   
   }
   
   render(){
      return(
                   <View style={styles.ButtonsStyle }>
          <Text>Signup</Text>
         
          <TextInput style={styles.textInputStyle} placeholder="email" value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}}></TextInput>
          <TextInput  style={styles.textInputStyle} placeholder="password" secureTextEntry={true} value={this.state.password} onChangeText={(text)=>{this.setState({password:text})}}></TextInput>
          <TextInput  style={styles.textInputStyle} placeholder="rewrite password" secureTextEntry={true} value={this.state.passwordconfirm} onChangeText={(text)=>{this.setState({passwordconfirm:text})}}></TextInput>
   
          <TouchableOpacity onPress={this.SignUpOnPress}>
          <Text style = {styles.text}>
          signup
          </Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress={this.LoginOnPress}>
          <Text style = {styles.text}>
          Login
          </Text>
       </TouchableOpacity>
       <TouchableOpacity   onPress={this.ForgotPasswordPress}>
          <Text style = {styles.text}>
          ForgetPassword
          </Text>
       </TouchableOpacity>
         
          
          </View>
          );
   }
   }
   
   export default SignUp;
   
   const styles = StyleSheet.create({
       ButtonsStyle: {
          marginTop:20
         
         
       },
       HeaderStyle: {
          backgroundColor:'orange'
         ,padding:10 
        },
        headertext:{
           textAlign:"left",
           fontSize:30
           ,color:'white'
        },
       textInputStyle: {
           marginTop:20,
           marginLeft:20,
           marginRight:20,
           
        },
       text: {
           borderWidth: 1,
           padding: 10,
           margin:10,
           borderColor: 'black',
           backgroundColor: 'red'
        }
     });