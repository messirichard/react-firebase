import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
import {store} from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Route path="/" exact component={Dashboard}>
            </Route>
            <Route path="/Login" component={Login}>
            </Route>
            <Route path="/register" component={Register}>
            </Route>
        </div>
      </Router>

    </Provider>
  );
}


export default App;
