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
<<<<<<< HEAD
<<<<<<< HEAD
                <Scene key="facility" component={Facility} title="Facility" navBar={NavBar} navigationBarStyle={{backgroundColor:'transparent',height:50,marginTop:30, borderBottomWidth:0}}/>

                <Scene key="facilityDetails" component={FacilityDetails} title="FacilityDetails" navBar={NavBar}/>
=======

              <Scene key="facilityforUser" component={FacilityforUser} title="FacilityforUser"/>
                
>>>>>>> 5a7c547ea8cb282d273d60e71c71d5014ee6800d
=======
                <Scene key="facility" component={Facility} title="Facility"/>
              <Scene key="facilityforUser" component={FacilityforUser} title="FacilityforUser"/>
                <Scene key="facilityDetails" component={FacilityDetails} title="FacilityDetails"/>
>>>>>>> 5a7c547ea8cb282d273d60e71c71d5014ee6800d
                <Scene key="resourceDetails" component={ResourceDetails} title="ResourceDetails"/>
            </Stack>
        </Router>


    );
  }
}
