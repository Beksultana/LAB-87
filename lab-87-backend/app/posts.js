const express = require('express');
const PostSchema = require('../models/Posts');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await PostSchema.find().populate('user');
        return res.send(posts);
    }catch (error) {
        return res.send(error)
    }
});


module.exports = router;