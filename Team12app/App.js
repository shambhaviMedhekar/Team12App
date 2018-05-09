import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './src/components/Login/LoginForm';
import Facility from './src/components/Login/Facility';

const  SimpleAppNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  Facility: { screen: Facility }
});

const AppNavigation = () => (
  <SimpleAppNavigator  />
);

export default class App extends React.Component {
  render() {
    return (
        <SimpleAppNavigator/>
    );
  }
}