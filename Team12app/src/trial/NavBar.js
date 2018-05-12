import {
    View, Text, Image, StatusBar, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.backgroundStyle}>
                <StatusBar />
                <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{
                    position: 'absolute',
                    paddingTop: 25,
                    paddingHorizontal: 10,
                    zIndex: 10
                }}>
                    <Image source={require('../Images/back-button.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'flex-end', paddingBottom: 10, flex: 1 }}>
                    <TouchableOpacity onPress={() => Actions.facilityforUser({ id: global.userid })}>
                        <Icon name='home' size={30} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={ styles.logoutStyle}
                        onPress={() => Actions.reset('login')}>
                        <Icon2 name='logout' size={30} color='red' />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}
const styles = {
    backgroundStyle: {
        flexDirection: 'row',
        backgroundColor: '#3498db',
        height: 70,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5
    },
    logoutStyle: {
        paddingRight: 10,
        paddingLeft: 10
    },
    textStyle: {
        color: '#FFF',
        fontSize: 20,
        flex: 5
    },
    title: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.9,
        paddingLeft:50
    }
};


export default NavBar;