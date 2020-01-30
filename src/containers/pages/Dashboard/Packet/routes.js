import React, {Component} from 'react';
import EditPacket from './EditPacket';
import CreatePacket from './CreatePacket';
import ShowPacket from './ShowPacket';
import ListPacket from './ListPacket';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class RoutesPacket extends Component{

    // let { path, url } = useRouteMatch();
    render(){
        return(
            <Switch>
                <Route exact path='/packet' component={ListPacket} />
                <Route exact path='/packet/edit/:id' component={EditPacket} />
                <Route exact path='/packet/create' component={CreatePacket} />
                <Route exact path='/packet/show/:id' component={ShowPacket} />
            </Switch>
        )
    }
}

export default RoutesPacket