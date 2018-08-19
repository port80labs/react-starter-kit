/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import AuthContext from '../../context';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/about">
          About
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/contact">
          Contact
        </Link>
        <span className={s.spacer}> | </span>
        <AuthContext.Consumer>
          {auth =>
            auth.isAuthenticated() ? (
              <a
                className={s.link}
                href="/logout"
                onClick={e => {
                  e.preventDefault();
                  auth.logout();
                  return false;
                }}
              >
                Logout
              </a>
            ) : (
              <a
                className={s.link}
                href="/login"
                onClick={e => {
                  e.preventDefault();
                  auth.login();
                  return false;
                }}
              >
                Log in
              </a>
            )
          }
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
