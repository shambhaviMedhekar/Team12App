import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ResourceDetails from './ResourceDetails';
import { Actions } from 'react-native-router-flux';
export default class FacilityDetails extends React.Component {


    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    onResourceClick
    onResourceClick = (resourceID) => {
        Actions.resourceDetails({ id: resourceID });
    }
    componentDidMount() {
        return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/GetAllInventoryForFacility', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Id: this.props.id, StrJson: "Jaffa" })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Inventory:</Text>
                <List>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={
                            ({ item }) =>

                                <ListItem
                                    style={styles.itemStyle}
                                    title={`${item.Name}`}
                                    onPress={() => this.onResourceClick(item.Id)}
                                />
                        }
                        keyExtractor={(item, index) => index}
                    />
                </List>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3498db',
        flex: 1,
        paddingTop: 20
    },
    title: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.9
    },
    itemStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        backgroundColor: "rgba(255,255,255,0.1)",
        elevation: 1
    }

});