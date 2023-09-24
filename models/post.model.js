const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
    },
    body: {
      type: String,
      required: [true, "Post body is required"],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
