import React from 'react';
import Auth from './components/Auth/Auth';

const auth = new Auth();
export default React.createContext(auth);
