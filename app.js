const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const bodyParser = require('body-parser');

const app = express();

console.log("App is running");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views')

//Listening on root
app.get('/todo/', function (req, res) {
  console.log(req.additions); //This will print the array of values.

  // TODO write your code here

  res.render('todo.mustache',  {

                                }
 );
});

let additions = [];
app.use(bodyParser.urlencoded({ extended: true }));
console.log("Additions Array: " + additions);
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
