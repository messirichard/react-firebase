
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Packet from './Dashboard/Packet';
import MainDashboard from './Dashboard/Main/';

function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/dashboard" component={MainDashboard} />
                    <Route path="/packet" component={Packet} />
                    <Route component={() => <div>Not found</div>} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes;