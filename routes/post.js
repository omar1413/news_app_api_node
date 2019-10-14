const express = require('express');

const postController = require('../controllers/post');

const router = express.Router();

router.get('/posts', postController.fetchAll);
router.get('/post/:id', postController.postId);
router.get('/posts/author/:id', postController.authorPosts);
router.get('/posts/category/:id', postController.categoryPosts);

module.exports = router;
