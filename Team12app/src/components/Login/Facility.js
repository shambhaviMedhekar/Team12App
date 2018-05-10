import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';


const AppNavigation = () => (
  <SimpleAppNavigator  />
);

export default class Facility extends React.Component {
static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
       <View >
               <Text>Open up App.js to start working on your app!</Text>
               <Text>Changes you make will automatically reload.</Text>
               <Text>Shake your phone to open the developer menu.</Text>
             </View>
    );
  }
}