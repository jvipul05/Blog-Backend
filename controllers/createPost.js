const mongoose = require('mongoose');
const postModel = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const post = new postModel({
            title: req.body.title,
            body: req.body.body,
        });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}