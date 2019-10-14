const express = require('express');

const authorController = require('../controllers/author');

const router = express.Router();

router.get('/authors', authorController.fetchAll);

router.get('/author/:id', authorController.findById);

module.exports = router;
