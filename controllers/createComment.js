const mongoose = require('mongoose');
const commentModel = require('../models/comments');
const postModel = require('../models/post');   

exports.createComment = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const comment = new commentModel({
            postId: req.params.id,
            user: req.body.user,
            comment: req.body.comment,
        });
        await comment.save();
        post.comments.push(comment._id);
        await post.save();
        const postu = await postModel.findById(req.params.id).populate('comments');
        res.status(201).json(postu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

