import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavBar from './NavBar';
export default class Facility extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    onFacilityClick = (facilityID) => {
        Actions.facilityDetails( { id: facilityID } );
    }
    componentDidMount() {
        return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/GetAllFacilities')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
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
                <Text style={styles.title}>Facilities For Admin:</Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.buttoncontainer}
                            onPress={() => this.onFacilityClick(item.id)}>
                            <Text style={styles.buttontext}>{item.Name}</Text></TouchableOpacity>}
                    keyExtractor={(item, index) => item.id}
                />
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
    buttoncontainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        width: 300,
        alignItems: 'center',

    },
    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }

});