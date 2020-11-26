import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li >
            <button>
              Forum Logo
            </button>
          </li>

          <li >
            <button>
              Home
            </button>
          </li>
         
          <li >
            <button>
              Hot
            </button>
          </li>

          <li>
            <input type="text" size='50' />
          </li>

          {/*  */}
          <li style={{float:"right"}}> 
            <button>
              <Link to="/RegisterPage">
              Register
              </Link>
            </button>
          </li>

          <li style={{float:"right"}}>
            <button>
              <Link to="/LoginPage">
                Login
              </Link>
            </button>
          </li>

        </ul>
      </>
    );
  }
}

export default NavBar;