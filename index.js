const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')

var app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));