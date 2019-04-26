const express = require('express');
const PostSchema = require('../models/Posts');
const auth = require('../middleware/auth');
const config = require('../config');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await PostSchema.find()
            .populate('user')
            .sort({dateTime: -1});
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

router.post('/', [auth, upload.single('image')], (req, res) => {
    if (req.body.description || req.body.image){

        const postData = req.body;

        if (req.file) {
            postData.image = req.file.filename;
        }

        const post = new PostSchema(postData);
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