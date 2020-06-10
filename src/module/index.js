import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from 'path';

import query from './user/index';
import * as trainee from './trainee/index';

const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all:true });

console.log('user query is ', query)
console.log('trainee query is ', trainee.Query);

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
