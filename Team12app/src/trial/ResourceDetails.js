import React from 'react';
import { FlatList, ActivityIndicator, Text,TextInput, View, StyleSheet,TouchableOpacity, Alert  } from 'react-native';
import {List, ListItem} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Actions} from 'react-native-router-flux';

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

                       this.setState({
                         isLoading: false,
                         dataSource: responseJson
                       }, function(){
                                });

                              })
                              .catch((error) =>{
                                console.error(error);
                              });
  }


onUpdate = (resource)=>{

const { TextInputCQ }  = this.state ;
const { TextInputComments }  = this.state ;

var cQvalue ="";
var commentsValue="";

if(!TextInputCQ){
cQvalue=resource.CurrentQuantity;
}
else{
cQvalue=TextInputCQ;

}
if(!TextInputComments){
commentsValue=resource.CurrentQuantity;
}
else{
commentsValue=TextInputComments;
}


 return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/InsertUpdateResource', {
                   method: 'POST',
                   headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({id: resource.Id,
                                                            name: "",
                                                            description: "",
                                                            color: "",
                                                            quantity: 1,
                                                            currentQuantity: cQvalue,
                                                            comments: commentsValue,
                                                            assignedTo: resource.AssignedTo,
                                                            icon: "",
                                                            size:"",
                                                            isActive:resource.IsActive,
                                                            createdBy:resource.CreatedBy,
                                                            createdDate:"2018-05-10T20:07:34.1713851+00:00",
                                                            modifiedBy:global.userid,
                                                            modifiedDate: "2018-05-10T20:07:34.1713851+00:00"})

                 })
                 .then((response) => response.json())
                                          .then((responseJson) => {
                                            
                                            this.setState({
                                              isLoading: false,
                                              data: responseJson
                                            }, function(){
                                            if(this.state.data.Status=="Success"){
                                                if(global.role == 'Admin'){
                                                    Actions.facilityDetails({id : resource.AssignedTo});
                                                }
                                                else{
                                                    Actions.facilityforUser({id: global.userid});
                                                }
                                            }
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
                <TouchableOpacity style={styles.buttoncontainer} onPress={() =>this.onUpdate(item)}>
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