import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import LoginTrial from './LoginTrial';
import FacilityDetails from './FacilityDetails';
import FacilityforUser from './FacilityforUser';
import ResourceDetails from './ResourceDetails';
import NavBar from './NavBar';
export default class Routes extends React.Component {
    render() {

        return (
            <Router navigationBarStyle={{ backgroundColor: '#3498db', paddingTop: 30, height: 80 }}>
                <Stack key="root" >
                    <Scene key="login" component={LoginTrial} title="Login" />

                    <Scene key="facilityDetails" component={FacilityDetails} title="Inventory" navBar={NavBar} navigationBarStyle={{ backgroundColor: 'transparent', height: 50, marginTop: 30, borderBottomWidth: 0 }} />

                    <Scene key="facilityforUser" component={FacilityforUser} title="Facilities" navBar={NavBar} navigationBarStyle={{ backgroundColor: 'transparent', height: 50, marginTop: 30, borderBottomWidth: 0 }} />

                    <Scene key="resourceDetails" component={ResourceDetails} title="Resource" navBar={NavBar} navigationBarStyle={{ backgroundColor: 'transparent', height: 50, marginTop: 30, borderBottomWidth: 0 }} />
                </Stack>
            </Router>


        );
    }
}
