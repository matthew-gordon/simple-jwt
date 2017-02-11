'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./src/server/routes/auth');
const messages = require('./src/server/routes/classifieds');

require('dotenv').config();

app.use('/', express.static(path.join(__dirname + '/src/client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth);
app.use('/classifieds', messages);

app.use('*', (req, res, next) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'src/client')});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
