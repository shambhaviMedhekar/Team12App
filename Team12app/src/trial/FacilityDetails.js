import React from 'react';
import { FlatList, ListItem,ActivityIndicator, Text, View, StyleSheet,TouchableOpacity  } from 'react-native';

export default class FacilityDetails extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/GetAllInventoryForFacility', {
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
      <Text style={styles.title}>Facility:</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <ListItem title={item.Name}}
                                                        subtitle={item.Description}/>}
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
                }

});