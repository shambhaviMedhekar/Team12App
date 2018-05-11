import {
 View,Text, Image, StatusBar, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

class NavBar extends Component {
  render() {
    return (
<View style={styles.backgroundStyle}>
      <StatusBar />
      <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => Actions.facility()}>
     <Text>Facilities</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => Actions.login()}>
           <Text>Logout</Text>
            </TouchableOpacity>


    </View>
</View>
    );
  }

}
const styles = {
  backgroundStyle: {
    backgroundColor:'#2980b9',
    height:40,
    color:'#ffffff'
  },
  backarrowStyle: {
    resizeMode: 'stretch',
    flexDirection: 'row',
    width: 50,
    height: 50,
    left: 0,
    justifyContent: 'flex-start'
  },
  helpStyle: {
    resizeMode: 'stretch',
      width: 50,
      height: 50,
      right: 220,
      justifyContent: 'flex-end',
      position: 'relative'

  },
  settingStyle: {
    resizeMode: 'stretch',
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
  position: 'relative',
  left: 210
  }
};


export default NavBar;