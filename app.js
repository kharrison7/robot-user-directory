const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const dataSet = require('./items.js');
const filtered = require('./main.js');
const bodyParser = require('body-parser');

const app = express();

console.log("App is running");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

  console.log(dataSet.users[1].id);
  console.log(dataSet.users[1]);

//Listening on root
app.get('/todo/', function (req, res) {
  console.log(req.additions); //This will print the array of values.

  // TODO write your code here
  res.render('todo.mustache',  {text1: "A Robot Directory",
                                 "unit": [{text2: dataSet.users[1].job,
                                text3: dataSet.users[1].name,
                                text4: dataSet.users[1].avatar,
                                text5: dataSet.users[1].company
                              }]}
 );
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
