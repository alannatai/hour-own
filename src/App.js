import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route 
            exact
            path='/'
            render={() => (
              <Dashboard />
            )}
          />
          <Route 
            exact
            path='/login'
            render={() => (
              <LoginPage />
            )}
          />
          <Route 
            exact
            path='/signup'
            render={() => (
              <SignupPage />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
