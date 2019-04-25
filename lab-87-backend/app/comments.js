const express = require('express');
const CommentSchema = require('../models/Comments');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.posts) {
       CommentSchema.find({posts: req.query.posts}).populate('user')
            .then(result => res.send(result))
            .catch(error => res.status(400).send(error))
    } else {
        CommentSchema.find()
            .then(result => res.send(result))
            .catch(error => res.status(400).send(error))
    }

});

router.post('/', auth, (req, res) => {
   const comments = new CommentSchema(req.body);
   comments.user = req.user._id;

   comments.save()
       .then(result => res.send(result))
       .catch(error => res.status(400).send(error))
});

module.exports = router;