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
    <GoogleOAuthProvider clientId='801196765489-5umnp526hbnk132fcrdc83lbkghu3a81.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);
