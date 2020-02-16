import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = props => {
  if(props.user) {
    return (
      <div className='Nav'>
        <Link to='/' className='Nav-link'>Home</Link>
        <Link to='' className='Nav-link' onClick={props.handleLogout}>Log Out</Link>
        {props.user.name}
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