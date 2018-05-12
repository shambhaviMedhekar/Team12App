import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button, StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Routes from './src/trial/Routes';

export default class App extends React.Component {
    render() {
        return (
            <Routes />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff'
    },
    title: {
        color: '#3f3f3f',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.9
    }
});
