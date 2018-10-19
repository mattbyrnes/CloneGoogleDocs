const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set port or process
const PORT = process.env.PORT || 3000;
mongoose.set('useCreateIndex', true);

// Express
const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// express.static
app.use(express.static('public'));
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost/gdocsdb', { useNewUrlParser: true });
mongoose.connect('mongodb://bcstudent1:bcpassword1@ds137003.mlab.com:37003/heroku_6fs4mqgr', { useNewUrlParser: true });

// Routes 
require('./routes/api-routes')(app);

// HTML Routes
require('./routes/html-routes')(app);

// Starts server on PORT
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});


