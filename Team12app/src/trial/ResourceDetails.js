import React from 'react';
import { FlatList, ActivityIndicator, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';

export default class ResourceDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            TextInputCQ: '',
            TextInputComments: '',
            res: ''
        }

    }

    componentDidMount() {
        return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/GetInventoryById', {
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
                    dataSource: responseJson
                }, function () {
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    onUpdate = (resource) => {

        const { TextInputCQ } = this.state;
        const { TextInputComments } = this.state;

        var cQvalue = "";
        var commentsValue = "";

        if (!TextInputCQ) {
            cQvalue = resource.CurrentQuantity;
        }
        else {
            cQvalue = TextInputCQ;

        }
        if (!TextInputComments) {
            commentsValue = resource.CurrentQuantity;
        }
        else {
            commentsValue = TextInputComments;
        }


        return fetch('https://zcx23fv688.execute-api.us-east-1.amazonaws.com/dev/InsertUpdateResource', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: resource.Id,
                name: "",
                description: "",
                color: "",
                quantity: 1,
                currentQuantity: cQvalue,
                comments: commentsValue,
                assignedTo: resource.AssignedTo,
                icon: "",
                size: "",
                isActive: resource.IsActive,
                createdBy: resource.CreatedBy,
                createdDate: "2018-05-10T20:07:34.1713851+00:00",
                modifiedBy: global.userid,
                modifiedDate: "2018-05-10T20:07:34.1713851+00:00"
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    data: responseJson
                }, function () {
                    if (this.state.data.Status === "Success") {
                        if (global.role === 'Admin') {
                            Actions.facilityDetails({ id: resource.AssignedTo });
                        }
                        else {
                            Actions.facilityforUser({ id: global.userid });
                        }
                    }
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
                <Text style={styles.title}>Resource:</Text>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.keyStyle}>Name:</Text>
                                <Text style={styles.valueStyle}>{item.Name}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.keyStyle}>Description:</Text>
                                <Text style={styles.valueStyle}>{item.Description}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.keyStyle}>Color:</Text>
                                <Text style={styles.valueStyle}>{item.Color}</Text>
                            </View>
                            <View style={styles.rowStyle}>
                                <Text style={styles.keyStyle}>Quantity:</Text>
                                <Text style={styles.valueStyle}>{item.Quantity}</Text>
                            </View>
                            <View style={{
                                marginBottom: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 50,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                backgroundColor: "rgba(255,255,255,0.1)"
                            }}>
                                <Text style={styles.keyStyle}>Current Quantity:</Text>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={styles.input} onChangeText={TextInputCQ => this.setState({ TextInputCQ })}
                                    keyboardType="numeric">
                                    {item.CurrentQuantity}
                                </TextInput>
                            </View>
                            <View style={{
                                marginBottom: 5,
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 110,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                backgroundColor: "rgba(255,255,255,0.1)"
                            }}>
                                <Text style={styles.keyStyle}>Comments:</Text>
                                <TextInput
                                    underlineColorAndroid={'transparent'}
                                    style={styles.inputArea} onChangeText={TextInputComments => this.setState({ TextInputComments })}>
                                    {item.Comments}</TextInput>
                            </View>
                            <TouchableOpacity
                                style={styles.buttoncontainer} onPress={() => this.onUpdate(item)}>
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
        backgroundColor: '#3498db',
        flex: 1
    },
    title: {
        color: '#fff',
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
        flex: 1,
        alignSelf: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    },
    input: {
        height: 40,
        width: 70,
        backgroundColor: 'rgba(255,255,255,0.4)',
        //marginBottom: 15,
        color: '#000',
        paddingHorizontal: 10,
        marginRight:10,
        borderRadius: 5,
        flex: 2
    },
    inputArea: {
        height: 100,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.4)',
        //marginBottom: 15,
        color: '#000',
        paddingHorizontal: 10,
        borderRadius: 5,
        flex: 2,
        marginRight: 10
    },
    rowStyle: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        backgroundColor: "rgba(255,255,255,0.1)"
    },
    keyStyle: {
        flex: 1,
        color: '#fff',
        paddingLeft: 10
    },
    valueStyle: {
        flex: 2,
        paddingRight: 10,
        fontWeight: 'bold'
    }
});