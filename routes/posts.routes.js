const {
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost,
} = require("../controllers/post.controller");

const router = require("express").Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getSinglePost).patch(updatePost).delete(deletePost);

module.exports = router;
