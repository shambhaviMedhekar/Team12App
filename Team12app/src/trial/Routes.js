import React from 'react';
import {Router, Stack, Scene } from 'react-native-router-flux';
import Facility from './Facility';
import LoginTrial from './LoginTrial';
import FacilityDetails from './FacilityDetails';
import FacilityforUser from './FacilityforUser';
import ResourceDetails from './ResourceDetails';
import NavBar from './NavBar';
export default class Routes extends React.Component {
  render() {

    return (
        <Router>
            <Stack key="root" >
                <Scene key="login" component={LoginTrial} title="Login"/>

                <Scene key="facility" component={Facility} title="Facility" navBar={NavBar} navigationBarStyle={{backgroundColor:'transparent',height:50,marginTop:30, borderBottomWidth:0}}/>

                <Scene key="facilityDetails" component={FacilityDetails} title="FacilityDetails" navBar={NavBar} navigationBarStyle={{backgroundColor:'transparent',height:50,marginTop:30, borderBottomWidth:0}}/>

              <Scene key="facilityforUser" component={FacilityforUser} title="FacilityforUser" navBar={NavBar} navigationBarStyle={{backgroundColor:'transparent',height:50,marginTop:30, borderBottomWidth:0}}/>

                <Scene key="resourceDetails" component={ResourceDetails} title="ResourceDetails" navBar={NavBar} navigationBarStyle={{backgroundColor:'transparent',height:50,marginTop:30, borderBottomWidth:0}}/>
            </Stack>
        </Router>


    );
  }
}
