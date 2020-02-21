import React from 'react';
import { Link } from 'react-router-dom';

import './LoginSignupLinks.css';

const LoginSignupLinks = props => {
    return (
      <div className='LoginSignupLinks'>
        <Link to='/login' id="login" className='waves-effect waves-light btn-large'>Log In</Link>
        <Link to='/signup' id="login" className='waves-effect waves-light btn-large'>Sign Up</Link>
      </div>
  );
};

export default LoginSignupLinks;