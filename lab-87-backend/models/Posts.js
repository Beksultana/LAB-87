const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
       type: String,
       required: true
    },
    description: {
       type: String,
        required: true
    },
    image: {
       type: String,
    },
    dateTime: {
       type: String,
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;