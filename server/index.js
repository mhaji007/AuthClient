// Main starting point of the application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB Setup
mongoose.connect('mongodb://127.0.0.1 :auth/auth', {useNewUrlParser: true});

const connection = mongoose.connection;
 
connection.on("connected", function() {
  console.log("connected to db");
});

// App setup
app.use(morgan('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json({type:'*/*'}));
router(app);

// Server Setup
const port = process.env.PORT||3090;
const server = http.createServer(app);
server.listen (port);
console.log('Server listening on:', port);




