/* eslint-disable class-methods-use-this */
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import history from '../../history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'xxxxx',
    clientID: 'xxxxx',
    redirectUri: 'xxxxx',
    audience: 'xxxxx',
    responseType: 'token id_token',
    scope: 'openid',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
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
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(Cookies.get('expires_at') || 'null');
    return new Date().getTime() < expiresAt;
  }
}
