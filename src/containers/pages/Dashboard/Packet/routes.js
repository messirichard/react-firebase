import React, {Component} from 'react';
import EditPacket from './EditPacket';
import CreatePacket from './CreatePacket';
import ShowPacket from './ShowPacket';
import Packet from '../Packet'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class RoutesPacket extends Component{
    render(){
        return(
            <>
                <Switch>
                    <Route exact={true} path='/packet/' component={Packet} />
                    <Route exact={true} path='/packet/edit/:id' component={EditPacket} />
                    <Route exact={true} path='/packet/create' component={CreatePacket} />
                    <Route exact={true} path='/packet/show/:id' component={ShowPacket} />
                </Switch>
            </>
        )
    }
}

export default RoutesPacket