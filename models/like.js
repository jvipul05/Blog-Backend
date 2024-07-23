const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({    
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Like', likeSchema);