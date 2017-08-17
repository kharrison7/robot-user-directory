const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./items.js');
// const bodyParser = require('body-parser');
const app = express();

// console.log("App is running");
// This sets up the module to run mustacheExpress and look for items in the views directory.
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// This pulls in the public file to help find the css.
app.use(express.static(__dirname + '/public'));

// This renders all the user data via mustache.
//Listening on root
app.get('/users', function(req, res){
  res.render('users', data)});

// This puts in a page at url localhost:3000/users/:username for a given username.
  app.get("/users/:username", function (req, res) {
    // filter goes through the data like a for loop.
  let thisIndividual = data.users.filter(function( obj ) {
    // console.log("This username: " + obj.username);
    // This checks each username vs the given url username.
    if (obj.username == req.params.username)
    return obj.username;
  });
    console.log("This individual info: " + thisIndividual[0].username);
    // This renders just the one profile.
    res.render('individual',thisIndividual[0]);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
