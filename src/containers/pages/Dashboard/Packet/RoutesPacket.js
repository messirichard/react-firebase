import React, {Component} from 'react';
import EditPacket from './EditPacket';
import CreatePacket from './CreatePacket';
import ShowPacket from './ShowPacket';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class RoutesPacket extends Component{
    render(){
        return(
            <>
                <Router>
                        <Route exact path='packet/' component={} />
                        <Route path='packet/edit/:id' component={EditPacket} />
                        <Route path='packet/create' component={CreatePacket} />
                        <Route path='packet/show/:id' component={ShowPacket} />
                </Router>
            </>
        )
    }
}

export default RoutesPacket