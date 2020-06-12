import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from 'path';
import query from './user/index';
import * as trainee from './trainee/index';

const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all:true });

export default{
  resolvers: {
    Query: {
      ...query,
      ...trainee.Query,
    },
    Mutation: {
      ...trainee.Mutation,
    },
  },
  typeDefs,
};
