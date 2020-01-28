import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login';
import Register from '../Register';
import Packet from '../Dashboard/Packet';
import ReportIn from '../Dashboard/ReportIn';
import ReportOut from '../Dashboard/ReportOut';
import Test from '../Test';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';
import Routes from '../routes';
import Dashboard from '../Dashboard/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Dashboard>
        <Routes />
      </Dashboard>
        </Switch>
      </Router>
    </Provider>
  );
}


export default App;
