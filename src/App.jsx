import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LangingPage';
import Login from './views/Login';
import Signup from './views/Signup';
import HomePage from './views/HomePage';

const GoogleVerify = () => (
  <>
    google-site-verification: googled22c070829fdf48c.html
  </>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/googled22c070829fdf48c" component={GoogleVerify} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  </Router>
);

export default App;
