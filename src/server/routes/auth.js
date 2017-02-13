'use strict';

const knex = require('../db/knex');
const express = require('express');
const router = express.Router();
const authHelpers = require('../db/auth/_helpers');
const localAuth = require('../db/auth/local');
const queries = require('../db/queries');

router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req)
  .then((user) => {
    const token = localAuth.encodeToken(user[0]);
    res.status(200).json({
      message: 'Registered',
      token: token
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'Error',
      message: 'Username already exists'
    });
  });
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  return queries.getUser(username)
  .then((response) => {
    const bool = authHelpers.comparePass(password, response.password);
    if(bool) return response;
    else return next();
  })
  .then((response) => { return localAuth.encodeToken(response); })
  .then((token) => {
    res.status(200).json({
      status: 'Success',
      token: token
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'Error',
      message: 'Invalid username/password'
    });
  });
});

router.get('/humbled', authHelpers.ensureAuthenticated, (req, res, next) => {
  res.send('Welcome boy!!!!');
});

router.get('/user',
  authHelpers.ensureAuthenticated,
  (req, res, next)  => {
  res.status(200).json({
    status: 'success'
  });
});

module.exports = router;
