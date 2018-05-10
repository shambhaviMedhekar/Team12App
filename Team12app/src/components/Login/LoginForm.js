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

  render() {
   const { navigate } = this.props.navigation;
    return (
<View>
    <Text style={styles.inputtext}>UserName: </Text>
            <TextInput placeholder="Please enter username" returnKeyType="next"
            onChangeText={TextInputUserName => this.setState({TextInputUserName})}
            style={styles.input}/>
            <Text  style={styles.inputtext}>Password: </Text>
            <TextInput secureTextEntry  placeholder="Please enter password"
            onChangeText={TextInputpwd => this.setState({TextInputpwd})}
            style={styles.input}/>
      <Button style={styles.buttoncontainer} onPress={()=>navigate('Facility')} title="Login" />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom: 10
  },
  inputtext:{
   fontWeight: 'bold',
  },
  buttoncontainer:{
  backgroundColor:'#2980b9',
  paddingVertical:10
  },
  buttontext:{
  textAlign:'center',
  fontWeight:'bold'
  }
});
