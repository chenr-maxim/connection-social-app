const postsResolvers = require('./posts');
const userResolvers = require('./users');

console.log(userResolvers);

module.exports = {
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation
  }
}