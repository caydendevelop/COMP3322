import React from 'react';
import './RegisterPage.css';
import {Link} from 'react-router-dom';

class RegisterPage extends React.Component {
  render() {
    return (
      <>
      <div className="RegisterPageContainer_1">
        <h2>Create an account</h2>

        <div className="left">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Password</h4>
          <h4>Confirmation</h4>
        </div>

        <div className="right">
          <input type="text" size="35" />
          <input type="email" size="35" />
          <input type="password" size="35" />
          <input type="password" size="35" />
        </div>
    
        <br/>

        <button>Register</button>

      </div>
      </>
    );
  }
}

export default RegisterPage;