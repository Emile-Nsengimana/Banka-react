/* eslint-disable no-restricted-globals */
import React from 'react';
import { Link } from 'react-router-dom';
import { Popup } from 'semantic-ui-react';

const token = sessionStorage.getItem('token') || null;

const logOut = () => {
  sessionStorage.clear();
  location.href = '/';
};
const NavBar = () => (

  <>
    <div className="navbar">
      <div className="logo">
        <Link to="/">
              Banka
        </Link>
      </div>

      <div className="links">
        {token !== null ? (
          <div className="top-menu">
            <div id="top-menu-avatar">
              <Popup
                className="user-name-popup"
                on="click"
                trigger={<div className="user-name">Emile</div>}
                content={(
                  <button
                    className="user-name-button"
                    onClick={logOut}
                    type="button"
                  >
                    <i className="fas fa-sign-out-alt" />
                  Logout
                  </button>
                    )}
                position="bottom left"
              />
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="login">
                  Login
            </Link>
            <Link to="/signup" className="signup">
                  Get Started
            </Link>
          </>
        )}
      </div>
    </div>
  </>
);

export default NavBar;
