import React from 'react';

import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

const SignupPage = props => {
  return (
    <div className='SignupPage'>
      <SignupForm {...props} />
    </div>
  ); 
}

export default SignupPage;