import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LangingPage';
import Login from './views/Login';
import Signup from './views/Signup';
import HomePage from './views/HomePage';
import Transactions from './views/Transactions';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/transaction" component={Transactions} />
    </Switch>
  </Router>
);

export default App;
