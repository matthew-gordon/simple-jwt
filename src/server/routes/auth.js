'use strict';

const knex = require('../db/knex');
const express = require('express');
const router = express.Router();
const authHelpers = require('../db/auth/_helpers');
const localAuth = require('../db/auth/local');

router.get('/users', (req, res, next) => {
  authHelpers.getUsers()
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((error) => {
    next(error);
  });
});

router.get('/users/:username', (req, res, next) => {
  authHelpers.getSingle(req.params.username)
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((error) => {
    next(error);
  });
});

router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req)
  .then((user) => {
    const token = localAuth.encodeToken(user[0]);
    res.status(200).json({
      message: 'success',
      token: token
    });
  })
  .catch((err) => {
    next(err);
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

router.get('/user',
  authHelpers.ensureAuthenticated,
  (req, res, next) => {
    res.status(200).json({
      status: 'success'
  });
});

module.exports = router;
