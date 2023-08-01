import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-ed3qnuqnvn3lb4os.us.auth0.com"
    clientId="kMn7Yf3sGl5bc4hryHuvNLT41DqavO1t"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>,
)
