import React, {Component} from 'react';
import EditTransactionIn from './EditTransactionIn';
import CreateTransactionIn from './CreateTransactionIn';
import ShowTransactionIn from './ShowTransactionIn';
import ListTransactionIn from './ListTransactionIn';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class RoutesTransactionIn extends Component{

    // let { path, url } = useRouteMatch();
    render(){
        return(
            <Switch>
                <Route exact path='/transactionin' component={ListTransactionIn} />
                <Route exact path='/transactionin/edit/:id' component={EditTransactionIn} />
                <Route exact path='/transactionin/create' component={CreateTransactionIn} />
                <Route exact path='/transactionin/show/:id' component={ShowTransactionIn} />
            </Switch>
        )
    }
}

export default RoutesTransactionIn