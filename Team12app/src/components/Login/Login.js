import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,navigation,navigate
} from 'react-native';

import LoginForm from './LoginForm';


export default class Login extends Component {
  render() {

    return (
<View style={styles.logo}>
            <Image source={require('../../Images/flatAvatar.png')} />
            <Text style={styles.title}>Inventory Management System</Text>
            </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3498db',
  },
  title : {
  color:'#3f3f3f',
  marginTop:10,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  opacity:0.9
  },
  logo:{
alignItems: 'center'
  }
});
