# Simple JWT app

Clone this Repo

Add dependencies
```yarn install (npm install)```

Create Database(s)
```createdb simpleJwt```
```createdb simpleJwt_test```

Run migrations
```knex migrate:latest```
```knex migrate:latest --env test```

Run seeds
```knex seed:run```
```knex seed:run --env test```

Run test suite
```yarn test (npm test)```
