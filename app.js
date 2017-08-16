const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./items.js');
const bodyParser = require('body-parser');

const app = express();

console.log("App is running");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static(__dirname + '/public'));

// app.set('views', __dirname + '/views');

  console.log(data.users[1].id);
  console.log(data.users[1]);

//Listening on root

app.get('/users', function(req, res){
  res.render('users', data)});



app.get('/users', function (req, res) {
  // console.log(req.additions);
  //This will print the array of values.
  res.render('users.mustache',  {text1: "A Robot Directory"
                            //      "unit": [{text2: dataSet.users[1].job,
                            //     text3: dataSet.users[1].name,
                            //     text4: dataSet.users[1].avatar,
                            //     text5: dataSet.users[1].company
                            //   },
                            //   {text2: dataSet.users[2].job,
                            //   text3: dataSet.users[2].name,
                            //   text4: dataSet.users[2].avatar,
                            //   text5: dataSet.users[2].company
                            //   }
                            //
                            // ]
                          }
 );
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
