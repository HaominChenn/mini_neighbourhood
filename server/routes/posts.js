import express from 'express';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost
} from '../controllers/posts.js';

import auth from '../middleware/auth.js'

const router = express.Router();
//call back function when someone visit localhost:5000
router.get('/', getPosts);
router.post('/', auth,createPost);
router.patch('/:id', auth,updatePost);
router.delete('/:id', auth,deletePost);
//use patch, like will update the numbers
router.patch('/:id/likePost', auth,likePost);
export default router;
