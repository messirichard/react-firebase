import React, {Component} from 'react'; 
import Header from '../../templates/Dashboard/Header';
import Navbar from '../../templates/Dashboard/Navbar';
import Packet from './Packet';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ReportIn from './ReportIn';
import ReportOut from './ReportOut';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Dashboard extends Component{ render(){ 
    
    return(
    <div>
        <Header />
        <Navbar />
        <Packet />

        <Switch>
            <Route path="/packet" component={Packet}>
               
            </Route>
            <Route path="/reportin" component={ReportIn}>
                
            </Route>
            <Route path="/reportout" component={ReportOut}>
                
            </Route>
        </Switch>
        
        {/* <ReportIn />
        <ReportOut /> */}
    </div>
    ) } } export default Dashboard;