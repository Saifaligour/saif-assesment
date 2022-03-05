import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { URL } from 'utils/constant';

function Header() {
  return (
    <>
      <header className="login-header" style={{ marginTop: '-50px' }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="#">
              <img src="assets/images/as.svg" alt="" width="129px" />
            </NavLink>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex">
                <ul className="login-right-nav nav">
                  <li className="nav-item">
                    <NavLink activeClassName="freedemo-btn" to={URL.Home}>
                      User
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="freedemo-btn" to={URL.Admin}>
                      Admin
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
