import express from 'express';
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost
} from '../controllers/posts.js';

const router = express.Router();
//call back function when someone visit localhost:5000
router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
//use patch, like will update the numbers
router.patch('/:id/likePost', likePost);
export default router;
