import * as api from '../api/index.js';
import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';
//action creators are functions that return an action
//that is a object has a type and payload
//with redux thunk can deal with asynchronous logic
//add async dispatch function inside the action
//instead return the action, have to dispatch it
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
    
  } catch (error) {
    console.log(error.message);
  }
};
//add search function
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
  // dispatch({ type: START_LOADING });
    const {  data: {data} } = await api.fetchPostsBySearch(searchQuery);
console.log(data);
  dispatch({ type: FETCH_BY_SEARCH, payload:  data  });
 //dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
//delete selected post
  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

//like a post

export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  