import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from '../Dashboard';
import ReportIn from '../Dashboard/ReportIn';
import ReportOut from '../Dashboard/ReportOut';
import Test from '../Test';
import { Provider } from 'react-redux';
import {store} from '../../../config/redux';
import Routes from '../routes';

function App() {
  return (
    <Provider store={store}>
      <Dashboard/>
    </Provider>
  );
}


export default App;
