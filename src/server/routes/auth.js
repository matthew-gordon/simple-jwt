'use strict';

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/register', (req, res, next) => {
  res.json({
    message: 'Under construction from the register route'
  })
});

module.exports = router;
