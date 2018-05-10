import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Facility extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/GetAllFacilities')
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
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.Name}, {item.Landmark}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}