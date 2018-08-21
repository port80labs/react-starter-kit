/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Button } from 'semantic-ui-react';
import AuthContext from '../../context';

class Login extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {auth => {
          const { login } = auth;
          return (
            <div>
              <Button
                onClick={e => {
                  e.preventDefault();
                  login();
                  return false;
                }}
              >
                Login
              </Button>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
