import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginFormTrial from './LoginFormTrial';
import Facility from './Facility';
import { createStackNavigator } from 'react-navigation';
import Routes from './Routes';
export default class LoginTrial extends Component {
    render() {
        const SimpleAppNavigator = createStackNavigator({
            LoginFormTrial: { screen: LoginFormTrial },
            Facility: { screen: Facility }
        });
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image style={styles.logo} source={require('../Images/flatAvatar.png')} />
                    <Text style={styles.title}>Inventory Management System</Text>
                    <LoginFormTrial />
                </View>
                <View></View>


            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logocontainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {

    },
    title: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 25
    }


});