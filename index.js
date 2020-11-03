const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")


// Routes Being Set Here
const login = require('./routes/login');


//Student Side routes
var app = express();
const port = 5002||process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


//Client Side Pages
app.use('/', login);


app.get('/logout', (request, response) => {
   request.logout();
  request.session.destroy();
  response.redirect('/');
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
