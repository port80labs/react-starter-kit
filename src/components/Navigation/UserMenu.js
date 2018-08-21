/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import AuthContext, { UserContext } from '../../context';

class UserMenu extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {auth => {
          const { logout } = auth;
          return (
            <UserContext.Consumer>
              {user => (
                <div>
                  <Icon name="user circle" size="large" />
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      logout();
                      return false;
                    }}
                  >
                    {user.name}
                  </Button>
                </div>
              )}
            </UserContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default UserMenu;
