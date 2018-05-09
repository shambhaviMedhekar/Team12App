import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  ScrollView, TouchableOpacity, KeyboardAvoidingView, Alert, navigation,navigate
} from 'react-native';
import Facility from './Facility';

export default class LoginForm extends Component{
static navigationOptions = {
    title: 'Welcome',
  };
  render() {
   const { navigate } = this.props.navigation;
    return (
    <View>
      <Button onPress={()=>navigate('Facility')} title="Login" />
      </View>
    );
  }
}
