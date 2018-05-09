import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from 'react-native';

import LoginForm from './LoginForm';


export default class Login extends Component {
  render() {
  const { navigate } = this.props.navigation;
    return (
                  <LoginForm />


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3498db'
  },
  title : {
  color:'#FFF',
  marginTop:10,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  opacity:0.9
  }
});
