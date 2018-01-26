const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}))

const port = 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`)
})
