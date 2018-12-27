const express = require('express'),
      app     = express(),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      mongoose = require('mongoose'),
      User = require('./models/users').User,
      Post = require('./models/users').Post;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/data-associations', { useNewUrlParser: true });

// var newUser = new User({
//     name: 'Joe Henry',
//     age: 20
// });

// newUser.posts.push({
//     title: 'My first post',
//     contents: 'This is great!'
// });

// newUser.save();

// User.findOne({name: 'Joe Henry'}, (err, user) => {
//     user.posts.push({
//         title: 'My second post',
//         contents: 'You fool'
//     });
//     user.save();
// })

// var newUser = new User({
//     name: 'Robert Young',
//     age: 4
// })

// newUser.posts.push({
//     title: 'Yippee!',
//     contents: 'I like lemons'
// });

// newUser.save();

// User.findOne({name: 'Robert Young'}, (err, user) => {
//     user.posts.push({
//         title: 'Oooooooh boy',
//         contents: 'Greatest!'
//     });
//     user.save();
// })


app.get('/', (req, res) => {
    res.redirect('/users')
})

// INDEX
app.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        res.render('index', { users })
    })
})

app.listen(8081, () => console.log('The server is running...'));