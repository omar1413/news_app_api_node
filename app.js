const express = require("express");
const bodyParser = require("body-parser");

const categoryRouter = require("./routes/category");
const authorRouter = require("./routes/author");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comment");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(categoryRouter);
app.use(authorRouter);
app.use(postRouter);
app.use(commentRouter);

app.listen(3000, () => {
  console.log("server up and running on port 3000");
});
