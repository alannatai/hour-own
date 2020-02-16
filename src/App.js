import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Nav from './components/Nav/Nav';
import userService from '../../utils/userService';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleSignupOrLogin = () => {
    this.setState({ 
      user: userService.getUser() 
    });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null
    });
  }

  render() {
    return (
      <>
        <Nav handleLogout={ this.handleLogout }/>
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
            render={({ history }) => (
              <LoginPage history={ history } handleSignupOrLogin={ this.handleSignupOrLogin }/>
            )}
          />
          <Route 
            exact
            path='/signup'
            render={({ history }) => (
              <SignupPage history={ history } handleSignupOrLogin={ this.handleSignupOrLogin }/>
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
