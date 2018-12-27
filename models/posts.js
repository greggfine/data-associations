const mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    title: String,
    contents: String
})

var Post = mongoose.model("Post", postSchema);

module.exports = {
    postSchema,
    Post
}