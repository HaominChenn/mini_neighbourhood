import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='906242549801-g9etirh577mdblv8jiieejuhq4ab5d7o.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);
