import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
  render() {
    return (
      <>
      <div className="LoginPageContainer_1">

        <div className="LoginPageContainer_2">
          <h2>
            Sign In
          </h2>

          <div>
            <h4 style={{display:"inline", marginRight:"4em"}}>
              Email
            </h4>
            <input type="email" size="35" style={{display:"inline"}}/>
            <br/><br/>
            <h4 style={{display:"inline", marginRight:"2em"}}>
              Password
            </h4>       
            <input type="password" size="35" style={{display:"inline"}}/>
            <br/><br/>
            <button>
              Login
            </button>
          </div>

        </div>

        <h4>Do not have an account?</h4>
        <button>
          <Link to="/RegisterPage">
            Register
          </Link>
        </button>

      </div>
      </>
    );
  }
}

export default LoginPage;