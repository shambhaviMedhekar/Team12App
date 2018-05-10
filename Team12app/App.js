import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './src/components/Login/LoginForm';
import Login from './src/components/Login/Login';
import Facility from './src/components/Login/Facility';

const  SimpleAppNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  Facility: { screen: Facility }
});

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
             <Login/>

                <SimpleAppNavigator/>

          </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f6f6f6'
  },
  title : {
  color:'#3f3f3f',
  marginTop:10,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  opacity:0.9
  }
});
