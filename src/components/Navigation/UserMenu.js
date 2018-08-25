/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
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
                <Dropdown
                  text={user.name}
                  icon={<Icon name="user circle" className="user-icon" />}
                  id="navigation-user"
                >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      text="Logout"
                      onClick={e => {
                        e.preventDefault();
                        logout();
                        return false;
                      }}
                    />
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </UserContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default UserMenu;
