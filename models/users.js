const mongoose = require('mongoose');
const postSchema = require('./posts').postSchema;
const Post = require('./posts').Post;

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    posts: [postSchema]
})

var User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Post
}