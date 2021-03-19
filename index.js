const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(keys.MONGO_URL,{useNewUrlParser: true})
  .then(() => {
    console.log('connected to mongodb');
    return server.listen({port: 5000});
  }).then((res) => {
    console.log(`server running on ${res.url}`);
  })
  .catch(err => {
    console.error(err);
  })