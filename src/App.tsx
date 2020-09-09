import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// pages
import Login from './components/pages/Login/Login';
import DevicesList from './components/pages/DevicesList/DevicesList';
import Unknown from './components/pages/Unknown/Unknown';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/listado-de-dispositivos" exact component={DevicesList} />
        <Route path="/404" exact component={Unknown} />
      </Switch>
    </Router>
  );
}

export default App;
