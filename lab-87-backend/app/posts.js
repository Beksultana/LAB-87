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

router.get('/:id', async (req, res) => {
    try {
        const postOne = await PostSchema.findById(req.params.id).populate('user');
        return res.send(postOne)
    }catch (error) {
        return res.send(error)
    }
});

router.post('/', auth, (req, res) => {
    if (req.body.description || req.body.image){

        const post = new PostSchema(req.body);
        post.user = req.user._id;
        post.dateTime = new Date().toISOString();

        post.save()
            .then(result => res.send(result))
            .catch(error => res.status(400).send(error))
    }else {
        return res.status(400).send({error: "Description/Image is required"})
    }
});
module.exports = router;