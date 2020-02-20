import React from 'react';
import { Link } from 'react-router-dom';

import './LoginSignupLinks.css';

const LoginSignupLinks = props => {
    return (
      <div className='LoginSignupLinks'>
        <Link to='/login' className='LoginSignupLinks-link'>Log In</Link>
        <Link to='/signup' className='LoginSignupLinks-link'>Sign Up</Link>
      </div>
  );
};

export default LoginSignupLinks;