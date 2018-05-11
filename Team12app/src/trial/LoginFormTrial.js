    import React, {Component} from 'react';
    import {View, StyleSheet,Image, Text, TextInput, TouchableOpacity,StatusBar, Button, navigation,navigate, Alert} from 'react-native';
    import Facility from './Facility';
     import FacilityforUser from './FacilityforUser';
    import {Actions} from 'react-native-router-flux';
    export default class LoginFormTrial extends Component {
    constructor(props) {
        super(props)
        this.state = {
          TextInputUserName: ''

        }
        global.role = '';
        global.userid = '';
      }


    onLogin2 = () =>{
     const { TextInputUserName }  = this.state ;
     const { TextInputpwd }  = this.state ;

      return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/AuthenticateUser', {
                      method: 'POST',
                      headers: {
                               'Accept': 'application/json',
                               'Content-Type': 'application/json'
                               },
                      body: JSON.stringify({UserName: TextInputUserName, Password:TextInputpwd})
                    })
                   .then((response) => response.json())
                         .then((responseJson) => {
                           this.setState({
                             isLoading: false,
                             dataSource: responseJson,
                           }, function(){
                           if(this.state.dataSource.Id !=0 )
                           {
                           global.role=this.state.dataSource.Role;
                            global.userid = this.state.dataSource.Id;
                               if (this.state.dataSource.Role == "Admin"){
                                Actions.facility();
                               }
                               else if (this.state.dataSource.Role == "User"){
                                const userID = this.state.dataSource.Id;

                                Actions.facilityforUser({id: userID});
                               }
                           }
                           else{
                           alert("User Name or Password is invalid!");
                           }


                           });

                         })
                         .catch((error) =>{
                           console.error(error);
                         });


    ;}

    render(){
    return(
    <View style={styles.container}>

        <TextInput style={styles.input}
            placeholder="username"
            placeholderTextColor="rgba(255,255,255,0.5)"
            keyboardType="email-address"
            onChangeText={TextInputUserName => this.setState({TextInputUserName})}
            autoCapitalize="none"
            autoCorrect={false}/>
        <TextInput style={styles.input}
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChangeText={TextInputpwd => this.setState({TextInputpwd})}
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
