import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Facility from './Facility';
import LoginTrial from './LoginTrial';
import FacilityDetails from './FacilityDetails';
export default class Routes extends React.Component {
  render() {

    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="login" component={LoginTrial} title="Login"/>
                <Scene key="facility" component={Facility} title="Facility"/>
                <Scene key="facilityDetails" component={FacilityDetails} title="FacilityDetails"/>
            </Stack>
        </Router>


    );
  }
}
