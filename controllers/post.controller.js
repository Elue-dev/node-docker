const Post = require("../models/post.model");

exports.getPosts = async function (req, res) {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getSinglePost = async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createPost = async function (req, res) {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updatePost = async function (req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "Post updated",
      post,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deletePost = async function (req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
