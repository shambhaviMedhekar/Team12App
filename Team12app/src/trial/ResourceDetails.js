import React from 'react';
import { FlatList, ActivityIndicator, Text,TextInput, View, StyleSheet,TouchableOpacity  } from 'react-native';
import {List, ListItem} from 'react-native-elements';
export default class ResourceDetails extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true},
    this.state.dataSource=""
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
                         dataSource: responseJson,
                       }, function(){

                       });

                     })
                     .catch((error) =>{
                       console.error(error);
                     });
  }

  renderRow
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
                <Text>{item.Name}</Text>
                <Text>{item.Description}</Text>
                <Text>{item.Color}</Text>

                <TextInput value={item.CurrentQuantity}
                            keyboardType="numeric"
                            />
                <Text>{item.Comments}</Text>
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
                     width:300,
                     backgroundColor:'rgba(255,255,255,0.2)',
                     marginBottom:15,
                     color:'#fff',
                     paddingHorizontal:10,
                     borderRadius:20
                     }

});