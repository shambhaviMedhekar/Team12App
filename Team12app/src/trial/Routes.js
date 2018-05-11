import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Facility from './Facility';
import LoginTrial from './LoginTrial';
import FacilityDetails from './FacilityDetails';
import FacilityforUser from './FacilityforUser';
import ResourceDetails from './ResourceDetails';
export default class Routes extends React.Component {
  render() {

    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="login" component={LoginTrial} title="Login"/>
                <Scene key="facility" component={Facility} title="Facility"/>
              <Scene key="facilityforUser" component={FacilityforUser} title="FacilityforUser"/>
                <Scene key="facilityDetails" component={FacilityDetails} title="FacilityDetails"/>
                <Scene key="resourceDetails" component={ResourceDetails} title="ResourceDetails"/>
            </Stack>
        </Router>


    );
  }
}
