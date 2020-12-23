const { gql } = require('apollo-server-express');

const Query = require('./typeDefs/query')
const Mutation = require('./typeDefs/mutation')
const Input = require('./typeDefs/input')
const Subscription = require('./typeDefs/subscription')
const Model = require('./typeDefs/model')

const typeDefs = gql`
  ${Query}
  ${Mutation}
  ${Model}
  ${Input}
  ${Subscription}
`;

module.exports = typeDefs;