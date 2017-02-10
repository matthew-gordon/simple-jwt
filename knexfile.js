'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/simpleJwt',
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/development'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/simpleJwt_test',
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/test'
    }
   },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations : {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds/production'
    }
   },

};
