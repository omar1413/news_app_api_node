const express = require("express");

const commentController = require("../controllers/comment");

const router = express.Router();

router.get("/comments", commentController.fetchAll);

module.exports = router;
