const mongoose = require('mongoose');
const config = require('./config');
const nanoid = require('nanoid');

const Post = require('./models/Posts');
const User = require('./models/User');
const Comment = require('./models/Comments');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }


    const user = await User.create(
        {username: 'User1', password: '123', token: nanoid()},
        {username: 'User2', password: '123', token: nanoid()}
    );

    const post = await Post.create(
        {
            title: "Post 1", description: "Some description",
            dateTime: new Date().toISOString(), user: user[0]._id
        },
        {
            title: "Post 2", description: "Some description 2",
            dateTime: new Date().toISOString(), user: user[1]._id
        }
    );

    await Comment.create(
        {posts: post[0]._id, user: user[0]._id, text: "Some text 1"},
        {posts: post[0]._id, user: user[1]._id, text: "Some text 2"},
        {posts: post[1]._id, user: user[0]._id, text: "Some text 1"}
    );
    await connection.close();
};

run().catch(error => {
   console.error('Something went wrong', error)
});