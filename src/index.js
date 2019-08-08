import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import Query from './resolvers/Query'
import Rating from './resolvers/Rating'
import Skill from './resolvers/Skill'
import SkillType from './resolvers/SkillType'
import Trade from './resolvers/Trade'
import User from './resolvers/User'

import typeDefs from './graphql/typeDefs'

const resolvers = {
  Query,
  Rating,
  Skill,
  SkillType,
  Trade,
  User
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ctx => ({
    ...ctx,
    prisma
  })
})

export default server
