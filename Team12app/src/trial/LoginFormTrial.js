    import React, {Component} from 'react';
    import {View, StyleSheet,Image, Text, TextInput, TouchableOpacity,StatusBar, Button, navigation,navigate} from 'react-native';
    import Facility from './Facility';
    import {Actions} from 'react-native-router-flux';
    export default class LoginFormTrial extends Component {
    onLogin2 = () =>{
    Actions.facility()
    ;}
    render(){
    return(
    <View style={styles.container}>

    <TextInput style={styles.input}
        placeholder="username"
        placeholderTextColor="rgba(255,255,255,0.5)"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}/>
    <TextInput style={styles.input}
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.5)"
        secureTextEntry/>
     <TouchableOpacity style={styles.buttoncontainer} onPress={this.onLogin2}>
     <Text style={styles.buttontext}>Login</Text>
             </TouchableOpacity>
    </View>
    );
    }
    }
    const styles = StyleSheet.create({
    container: {
    padding:20,
    marginBottom:0
    },
    input:{
    height:40,
    width:300,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:15,
    color:'#fff',
    paddingHorizontal:10,
    borderRadius:20
    },
    buttoncontainer:{
    backgroundColor:'#2980b9',
    paddingVertical:10,
    borderRadius:20
    },
    buttontext:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'700'
    }});