/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Callback from '../../components/Callback/Callback';
import AuthContext from '../../context';

function action(context) {
  return {
    component: (
      <Layout>
        <AuthContext.Consumer>
          {auth => {
            if (context.hash && context.hash.access_token) {
              auth.handleAuthentication();
            }
          }}
        </AuthContext.Consumer>
        <Callback />
      </Layout>
    ),
  };
}

export default action;
