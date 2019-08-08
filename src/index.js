import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'

import { yupMiddleware } from 'graphql-yup-middleware'

import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Rating from './resolvers/Rating'
import Skill from './resolvers/Skill'
import SkillType from './resolvers/SkillType'
import Trade from './resolvers/Trade'
import User from './resolvers/User'

import typeDefs from './graphql/typeDefs'

const resolvers = {
  Query,
  Mutation,
  Rating,
  Skill,
  SkillType,
  Trade,
  User
}

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers,
  context: ctx => ({
    ...ctx,
    prisma
  }),
  middlewares: [yupMiddleware()]
})

export default server
