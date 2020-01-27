import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import Packet from '../Dashboard/Packet';
import ReportIn from '../Dashboard/ReportIn';
import ReportOut from '../Dashboard/ReportOut';
import Test from '../Test';
import { Provider } from 'react-redux';
import {store} from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Route path="/" exact component={Login}>
            </Route>
            <Route path="/dashboard" component={Dashboard}>
            </Route>
            <Route path="/register" component={Register}>
            </Route>
            <Route path="/packet" component={Packet}>
            </Route>
            <Route path="/reportin" component={ReportIn}>
            </Route>
            <Route path="/reportout" component={ReportOut}>
            </Route>
        </div>
      </Router>

    </Provider>
  );
}


export default App;
