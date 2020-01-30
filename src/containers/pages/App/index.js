import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login';
import Register from '../Register';
import Test from '../Test';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';
import Routes from '../routes';
import Dashboard from '../Dashboard/';

// import CreatePacket from '../Dashboard/Packet/CreatePacket';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/test" component={Test} />
          {/* <Route path="/packet/create" component={CreatePacket} /> */}
          <Dashboard>
            <Routes />
          </Dashboard>
        </Switch>
      </Router>
    </Provider>
  );
}


export default App;
