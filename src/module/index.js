import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from 'path';
import * as user from './user/index';
import * as trainee from './trainee/index';

const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all:true });

export default{
  resolvers: {
    Query: {
      ...user.Query,
      ...trainee.Query,
    },
    Mutation: {
      ...user.Mutation,
      ...trainee.Mutation,
    },
    Subscription:{
      ...trainee.Subscription,
    },
  },
  typeDefs,
};
