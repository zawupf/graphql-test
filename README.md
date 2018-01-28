# graphql-test

A GraphQL sandbox


## Features

* [Express](https://github.com/expressjs/express) based
  [GraphQL](https://github.com/facebook/graphql) server
* Simple json based database ([json-server](https://github.com/typicode/json-server))


## How to use

* Install dependencies: `yarn`
* `yarn dev` -- this will:
  * Start the database server which provides a simple REST api to the "database"
  * Start the development http server which provides an express based http server with _graphql_ api.
    (Automatically restarted on modifications by _nodemon_)


## License

[MIT](./LICENSE)
