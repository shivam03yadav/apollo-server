import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from 'path';

import user from './user/index';

const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all:true });

export default{
  resolvers: {
    Query: {
      ...user,
    },
  },
  typeDefs,
};
