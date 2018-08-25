/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import AuthContext from '../../context';

class Login extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {auth => {
          const { login } = auth;
          return (
            <Menu text id="navigation-login">
              <Menu.Item
                name="Login"
                icon={<Icon name="sign in" className="user-icon" />}
                onClick={e => {
                  e.preventDefault();
                  login();
                  return false;
                }}
              />
            </Menu>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
