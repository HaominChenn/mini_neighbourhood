import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
//const API = axios.create({ baseURL: 'https://mini-neighbourhood-qz1w-ga3v-main-afxatgjf6a-wm.a.run.app' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const createPost = (newPost) => API.post('/posts', newPost);
export const fetchPosts = () => API.get('/posts');
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);