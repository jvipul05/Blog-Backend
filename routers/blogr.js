const express = require('express');
const router = express.Router();

const { createPost } =require('../controllers/createPost');

router.post('/createPost', createPost);

const { createComment } = require('../controllers/createComment');
router.post('/createComment/:id', createComment);

const { createLike,deleteLike } = require('../controllers/createLike');
router.post('/createLike/:id', createLike);
router.delete('/deleteLike/:id', deleteLike);

const { showPost } = require('../controllers/showPost');
router.get('/showPost', showPost);

module.exports = router;