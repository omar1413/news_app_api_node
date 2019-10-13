const express = require("express");
const categoryController = require("../controllers/category");

const router = express.Router();

router.get("/categories", categoryController.fetchAll);

module.exports = router;
