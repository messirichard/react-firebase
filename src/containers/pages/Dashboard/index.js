import React, {Component} from 'react'; 
import Header from '../../templates/Dashboard/Header';
import Navbar from '../../templates/Dashboard/Navbar';
import Packet from './Packet';
// import ReportIn from './ReportIn';
// import ReportOut from './ReportOut';



class Dashboard extends Component{ render(){ return(
    <div>
        <Header />
        <Navbar />
        <Packet />
        {/* <ReportIn />
        <ReportOut /> */}
    </div>
    ) } } export default Dashboard;