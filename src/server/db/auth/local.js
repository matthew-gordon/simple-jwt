'use strict';

const jwt = require('jsonwebtoken');
const moment = require('moment');

function encodeToken(user) {
  const secret = process.env.TOKEN_SECRET;
  const payload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: {
      id: user.id,
      username: user.username
    }
  };
  return jwt.sign(payload, secret, {});
}

function decodeToken(token, callback) {
  const secret = process.env.TOKEN_SECRET;
  const decoded = jwt.verify(token, secret);
  const now = moment().unix();
  if (now > decoded.exp) callback('Token has expired.');
  else callback(null, decoded)
}

module.exports = {
  encodeToken,
  decodeToken
};
