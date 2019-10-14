const express = require('express');

const commentController = require('../controllers/comment');

const router = express.Router();

router.get('/comments', commentController.fetchAll);
router.get('/comments/author/:id', commentController.authorComments);
router.get('/comments/post/:id', commentController.postComments);

module.exports = router;
