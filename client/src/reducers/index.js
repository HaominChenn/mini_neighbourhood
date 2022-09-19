import { combineReducers } from 'redux';

import posts from './posts.js';
import auth from './auth.js'

//value and key are same, only need keep first one
export default combineReducers({ posts, auth });


