import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
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
            <Route path="/test" component={Test}>
            </Route>
        </div>
      </Router>

    </Provider>
  );
}


export default App;
