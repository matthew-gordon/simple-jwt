'use strict';

const knex = require('../db/knex');
const express = require('express');
const router = express.Router();
const authHelpers = require('../db/auth/_helpers');
const localAuth = require('../db/auth/local');

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
    return next(new Error('Username already exists'));
  });
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  return authHelpers.getSingle(username)
  .then((user) => {
    authHelpers.comparePass(password, user.password);
    return user;
  })
  .then((user) => { return localAuth.encodeToken(user); })
  .then((token) => {
    res.status(200).json({
      status: 'success',
      token: token
    });
  })
  .catch((error) => {
    res.status(500).json({
      status: 'error'
    });
  });
});

module.exports = router;
