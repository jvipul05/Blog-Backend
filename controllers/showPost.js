const mongoose = require('mongoose');

const postModel = require('../models/post');

exports.showPost = async (req, res) => {
    try {
        const post = await postModel.find().populate('comments').populate('likes');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({post: post});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}