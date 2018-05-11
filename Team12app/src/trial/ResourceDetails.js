import React from 'react';
import { FlatList, ActivityIndicator, Text,TextInput, View, StyleSheet,TouchableOpacity, Alert  } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class ResourceDetails extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
     TextInputCQ: '',
     TextInputComments: '',
     res:''
    }

  }

  componentDidMount(){
    return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/GetInventoryById', {
                  method: 'POST',
                  headers: {
                           'Accept': 'application/json',
                           'Content-Type': 'application/json'
                           },
                  body: JSON.stringify({Id: this.props.id, StrJson: "Jaffa"})
                })
               .then((response) => response.json())
                     .then((responseJson) => {
                     alert(responseJson.json())
                       this.setState({
                         isLoading: false,
                         dataSource: responseJson,
                         TextInputCQ:responseJson.CurrentQuantity
                       }, function(){
                       const { TextInputCQ }  = this.state ;

                                });

                              })
                              .catch((error) =>{
                                console.error(error);
                              });
  }


onUpdate = (resourceId)=>{

const { TextInputCQ }  = this.state ;
const { TextInputComments }  = this.state ;



 return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/InsertUpdateResource', {
                   method: 'POST',
                   headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({id: resourceId,
                                                            name: "",
                                                            description: "",
                                                            color: "",
                                                            quantity: 1,
                                                            currentQuantity: TextInputCQ,
                                                            comments: TextInputComments,
                                                            assignedTo: 1,
                                                            icon: "",
                                                            size:"",
                                                            isActive:"",
                                                            createdBy:1,
                                                            createdDate:"2018-05-10T20:07:34.1713851+00:00",
                                                            modifiedBy:1,
                                                            modifiedDate: "2018-05-10T20:07:34.1713851+00:00"})

                 })
                 .then((response) => response.json())
                                          .then((responseJson) => {

                                            this.setState({
                                              isLoading: false
                                            }, function(){

                                            });

                                          })
                                          .catch((error) =>{
                                            console.error(error);
                                          });
 }
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


 return(

      <View style={styles.container}>
      <Text style={styles.title}>Resource:</Text>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View>
                <Text>Name: {item.Name}</Text>
                <Text>Deacription: {item.Description}</Text>
                <Text>Color: {item.Color}</Text>
                <Text>Quantity: {item.Quantity}</Text>
                <Text>Current Quantity: </Text>
                <TextInput  style={styles.input}  onChangeText={TextInputCQ => this.setState({TextInputCQ})}
                keyboardType="numeric">
                {item.CurrentQuantity}
                </TextInput>
                <Text>Comments: </Text>
                <TextInput style={styles.inputArea} onChangeText={TextInputComments => this.setState({TextInputComments})}>
                {item.Comments}</TextInput>
                <TouchableOpacity style={styles.buttoncontainer} onPress={() =>this.onUpdate(item.Id)}>
                         <Text style={styles.buttontext}>Update</Text>
                          </TouchableOpacity>
        </View>
          }
          keyExtractor={(item, index) => index}
        />

      </View>
    );
  }
}
const styles = StyleSheet.create({
 container: {
        flex: 1,
        backgroundColor:'#3498db',
flex: 1, paddingTop:20
    },
title : {
      color:'#fff',
      marginTop:10,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      opacity:0.9
      },
           buttoncontainer:{
           backgroundColor:'#2980b9',
           paddingVertical:10,
           borderRadius:20,
           marginBottom:10,
           marginTop:10,
           width:300,
           alignItems: 'center',

           },
                buttontext:{
                textAlign:'center',
                color:'#fff',
                fontWeight:'700'
                },
                     input:{
                     height:40,
                     width:50,
                     backgroundColor:'rgba(255,255,255,0.2)',
                     marginBottom:15,
                     color:'#fff',
                     paddingHorizontal:10,
                     borderRadius:20
                     },
                     inputArea:{
                                          height:100,
                                          width:300,
                                          backgroundColor:'rgba(255,255,255,0.2)',
                                          marginBottom:15,
                                          color:'#fff',
                                          paddingHorizontal:10,
                                          borderRadius:20
                                          }

});