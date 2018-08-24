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
import Login from './Login';
import UserMenu from './UserMenu';
import { UserContext } from '../../context';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <UserContext.Consumer>
          {user => (user ? <UserMenu /> : <Login />)}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
