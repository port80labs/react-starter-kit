import React from 'react';
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import history from './history';
/* eslint-disable class-methods-use-this */

export const UserContext = React.createContext();

export class Auth {
  constructor() {
    if (process.env.BROWSER) {
      this.auth0 = new auth0.WebAuth({
        domain: window.App.auth0.domain,
        clientID: window.App.auth0.clientId,
        redirectUri: window.App.auth0.callbackUrl,
        audience: `https://${window.App.auth0.domain}/userinfo`,
        responseType: 'token id_token',
        scope: 'openid email profile',
      });
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  async getProfile() {
    return new Promise((resolve, reject) => {
      if (Cookies.get('access_token')) {
        this.auth0.client.userInfo(
          Cookies.get('access_token'),
          (userErr, user) => {
            if (userErr) {
              reject(userErr);
            } else {
              resolve(user);
            }
          },
        );
      } else {
        resolve(undefined);
      }
    });
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.auth0.client.userInfo(authResult.accessToken, (userErr, user) => {
          this.userInfo = user;
        });
        history.replace('/');
      } else if (err) {
        history.push('/error');
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    );
    Cookies.set('access_token', authResult.accessToken);
    Cookies.set('id_token', authResult.idToken);
    Cookies.set('expires_at', expiresAt);
    // navigate to the home route
  }

  logout() {
    // Clear access token and ID token from local storage
    Cookies.remove('access_token');
    Cookies.remove('id_token');
    Cookies.remove('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(Cookies.get('expires_at') || 'null');
    return new Date().getTime() < expiresAt;
  }
}

const auth = new Auth();
export default React.createContext(auth);
