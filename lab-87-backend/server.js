const mongoose = require('mongoose');
const express = require('express');
const config = require('./config');
const cors = require('cors');

const posts = require('./app/posts');
const users = require('./app/users');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const port = 7000;

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {

    app.use('/posts', posts);
    app.use('/users', users);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

});