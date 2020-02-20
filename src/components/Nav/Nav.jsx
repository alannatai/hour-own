import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = props => {
  if(props.user) {
    return (
      <div className='Nav'>
        <Link to='/user/dashboard' className='Nav-link'>Dashboard</Link>
        <Link to='/user/recurring' className='Nav-link'>Recurring</Link>
        <Link to='/user/goals' className='Nav-link'>Goals</Link>
        <Link to='' className='Nav-link' onClick={props.handleLogout}>Log Out</Link>
        Welcome! {props.user.name}
      </div>
    )
  }
    return (
      <div className='Nav'>
        <Link to='/login' className='Nav-link'>Log In</Link>
        <Link to='/signup' className='Nav-link'>Sign Up</Link>
      </div>
  );
};

export default Nav;