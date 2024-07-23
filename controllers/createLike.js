const mongoose = require('mongoose');

const likeModel = require('../models/like');
const postModel = require('../models/post');

exports.createLike = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const like = new likeModel({
            postId: req.params.id,
            user: req.body.user,
        });
        await like.save();
        post.likes.push(like._id);
        await post.save();
        res.status(201).json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteLike = async (req, res) => {
    try{
        const post = await postModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const like = await likeModel.findByIdAndDelete(req.body.like);
        if (!like) {
            return res.status(404).json({ message: 'Like not found' });
        }
       
        post.likes.pull(like._id);
        await post.save();
        res.status(200).json({ message: 'Like deleted' });


    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}