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
import Auth from '../../components/Auth/Auth';

function action(context) {
  const auth = new Auth();

  if (context.hash && context.hash.access_token) {
    auth.handleAuthentication();
  }
  return {
    component: (
      <Layout>
        <Callback />
      </Layout>
    ),
  };
}

export default action;
