import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css";

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider } from '~/context/authentication/AuthenticationProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>
)
