module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateRating {
  count: Int!
}

type AggregateSkill {
  count: Int!
}

type AggregateSkillType {
  count: Int!
}

type AggregateTrade {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createRating(data: RatingCreateInput!): Rating!
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  createSkill(data: SkillCreateInput!): Skill!
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  deleteManySkills(where: SkillWhereInput): BatchPayload!
  createSkillType(data: SkillTypeCreateInput!): SkillType!
  updateSkillType(data: SkillTypeUpdateInput!, where: SkillTypeWhereUniqueInput!): SkillType
  updateManySkillTypes(data: SkillTypeUpdateManyMutationInput!, where: SkillTypeWhereInput): BatchPayload!
  upsertSkillType(where: SkillTypeWhereUniqueInput!, create: SkillTypeCreateInput!, update: SkillTypeUpdateInput!): SkillType!
  deleteSkillType(where: SkillTypeWhereUniqueInput!): SkillType
  deleteManySkillTypes(where: SkillTypeWhereInput): BatchPayload!
  createTrade(data: TradeCreateInput!): Trade!
  updateTrade(data: TradeUpdateInput!, where: TradeWhereUniqueInput!): Trade
  updateManyTrades(data: TradeUpdateManyMutationInput!, where: TradeWhereInput): BatchPayload!
  upsertTrade(where: TradeWhereUniqueInput!, create: TradeCreateInput!, update: TradeUpdateInput!): Trade!
  deleteTrade(where: TradeWhereUniqueInput!): Trade
  deleteManyTrades(where: TradeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  rating(where: RatingWhereUniqueInput!): Rating
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  skill(where: SkillWhereUniqueInput!): Skill
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!
  skillType(where: SkillTypeWhereUniqueInput!): SkillType
  skillTypes(where: SkillTypeWhereInput, orderBy: SkillTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SkillType]!
  skillTypesConnection(where: SkillTypeWhereInput, orderBy: SkillTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillTypeConnection!
  trade(where: TradeWhereUniqueInput!): Trade
  trades(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trade]!
  tradesConnection(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TradeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Rating {
  id: ID!
  author: User!
  subject: User!
  skill: Skill!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RatingConnection {
  pageInfo: PageInfo!
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  id: ID
  author: UserCreateOneWithoutAuthorOfInput!
  subject: UserCreateOneWithoutRatedInInput!
  skill: SkillCreateOneInput!
}

input RatingCreateManyWithoutAuthorInput {
  create: [RatingCreateWithoutAuthorInput!]
  connect: [RatingWhereUniqueInput!]
}

input RatingCreateManyWithoutSubjectInput {
  create: [RatingCreateWithoutSubjectInput!]
  connect: [RatingWhereUniqueInput!]
}

input RatingCreateWithoutAuthorInput {
  id: ID
  subject: UserCreateOneWithoutRatedInInput!
  skill: SkillCreateOneInput!
}

input RatingCreateWithoutSubjectInput {
  id: ID
  author: UserCreateOneWithoutAuthorOfInput!
  skill: SkillCreateOneInput!
}

type RatingEdge {
  node: Rating!
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RatingPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RatingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RatingScalarWhereInput!]
  OR: [RatingScalarWhereInput!]
  NOT: [RatingScalarWhereInput!]
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
  AND: [RatingSubscriptionWhereInput!]
  OR: [RatingSubscriptionWhereInput!]
  NOT: [RatingSubscriptionWhereInput!]
}

input RatingUpdateInput {
  author: UserUpdateOneRequiredWithoutAuthorOfInput
  subject: UserUpdateOneRequiredWithoutRatedInInput
  skill: SkillUpdateOneRequiredInput
}

input RatingUpdateManyWithoutAuthorInput {
  create: [RatingCreateWithoutAuthorInput!]
  delete: [RatingWhereUniqueInput!]
  connect: [RatingWhereUniqueInput!]
  set: [RatingWhereUniqueInput!]
  disconnect: [RatingWhereUniqueInput!]
  update: [RatingUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [RatingUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [RatingScalarWhereInput!]
}

input RatingUpdateManyWithoutSubjectInput {
  create: [RatingCreateWithoutSubjectInput!]
  delete: [RatingWhereUniqueInput!]
  connect: [RatingWhereUniqueInput!]
  set: [RatingWhereUniqueInput!]
  disconnect: [RatingWhereUniqueInput!]
  update: [RatingUpdateWithWhereUniqueWithoutSubjectInput!]
  upsert: [RatingUpsertWithWhereUniqueWithoutSubjectInput!]
  deleteMany: [RatingScalarWhereInput!]
}

input RatingUpdateWithoutAuthorDataInput {
  subject: UserUpdateOneRequiredWithoutRatedInInput
  skill: SkillUpdateOneRequiredInput
}

input RatingUpdateWithoutSubjectDataInput {
  author: UserUpdateOneRequiredWithoutAuthorOfInput
  skill: SkillUpdateOneRequiredInput
}

input RatingUpdateWithWhereUniqueWithoutAuthorInput {
  where: RatingWhereUniqueInput!
  data: RatingUpdateWithoutAuthorDataInput!
}

input RatingUpdateWithWhereUniqueWithoutSubjectInput {
  where: RatingWhereUniqueInput!
  data: RatingUpdateWithoutSubjectDataInput!
}

input RatingUpsertWithWhereUniqueWithoutAuthorInput {
  where: RatingWhereUniqueInput!
  update: RatingUpdateWithoutAuthorDataInput!
  create: RatingCreateWithoutAuthorInput!
}

input RatingUpsertWithWhereUniqueWithoutSubjectInput {
  where: RatingWhereUniqueInput!
  update: RatingUpdateWithoutSubjectDataInput!
  create: RatingCreateWithoutSubjectInput!
}

input RatingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  subject: UserWhereInput
  skill: SkillWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RatingWhereInput!]
  OR: [RatingWhereInput!]
  NOT: [RatingWhereInput!]
}

input RatingWhereUniqueInput {
  id: ID
}

type Skill {
  id: ID!
  description: String!
  type: SkillType!
  tradedIn(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trade!]
  ratedIn(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SkillConnection {
  pageInfo: PageInfo!
  edges: [SkillEdge]!
  aggregate: AggregateSkill!
}

input SkillCreateInput {
  id: ID
  description: String!
  type: SkillTypeCreateOneWithoutContainsInput!
  tradedIn: TradeCreateManyWithoutSkillInput
  ratedIn: SkillCreateManyInput
}

input SkillCreateManyInput {
  create: [SkillCreateInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateManyWithoutTypeInput {
  create: [SkillCreateWithoutTypeInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateOneInput {
  create: SkillCreateInput
  connect: SkillWhereUniqueInput
}

input SkillCreateOneWithoutTradedInInput {
  create: SkillCreateWithoutTradedInInput
  connect: SkillWhereUniqueInput
}

input SkillCreateWithoutTradedInInput {
  id: ID
  description: String!
  type: SkillTypeCreateOneWithoutContainsInput!
  ratedIn: SkillCreateManyInput
}

input SkillCreateWithoutTypeInput {
  id: ID
  description: String!
  tradedIn: TradeCreateManyWithoutSkillInput
  ratedIn: SkillCreateManyInput
}

type SkillEdge {
  node: Skill!
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input SkillScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SkillScalarWhereInput!]
  OR: [SkillScalarWhereInput!]
  NOT: [SkillScalarWhereInput!]
}

type SkillSubscriptionPayload {
  mutation: MutationType!
  node: Skill
  updatedFields: [String!]
  previousValues: SkillPreviousValues
}

input SkillSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillWhereInput
  AND: [SkillSubscriptionWhereInput!]
  OR: [SkillSubscriptionWhereInput!]
  NOT: [SkillSubscriptionWhereInput!]
}

type SkillType {
  id: ID!
  description: String!
  contains(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SkillTypeConnection {
  pageInfo: PageInfo!
  edges: [SkillTypeEdge]!
  aggregate: AggregateSkillType!
}

input SkillTypeCreateInput {
  id: ID
  description: String!
  contains: SkillCreateManyWithoutTypeInput
}

input SkillTypeCreateOneWithoutContainsInput {
  create: SkillTypeCreateWithoutContainsInput
  connect: SkillTypeWhereUniqueInput
}

input SkillTypeCreateWithoutContainsInput {
  id: ID
  description: String!
}

type SkillTypeEdge {
  node: SkillType!
  cursor: String!
}

enum SkillTypeOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillTypePreviousValues {
  id: ID!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SkillTypeSubscriptionPayload {
  mutation: MutationType!
  node: SkillType
  updatedFields: [String!]
  previousValues: SkillTypePreviousValues
}

input SkillTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillTypeWhereInput
  AND: [SkillTypeSubscriptionWhereInput!]
  OR: [SkillTypeSubscriptionWhereInput!]
  NOT: [SkillTypeSubscriptionWhereInput!]
}

input SkillTypeUpdateInput {
  description: String
  contains: SkillUpdateManyWithoutTypeInput
}

input SkillTypeUpdateManyMutationInput {
  description: String
}

input SkillTypeUpdateOneRequiredWithoutContainsInput {
  create: SkillTypeCreateWithoutContainsInput
  update: SkillTypeUpdateWithoutContainsDataInput
  upsert: SkillTypeUpsertWithoutContainsInput
  connect: SkillTypeWhereUniqueInput
}

input SkillTypeUpdateWithoutContainsDataInput {
  description: String
}

input SkillTypeUpsertWithoutContainsInput {
  update: SkillTypeUpdateWithoutContainsDataInput!
  create: SkillTypeCreateWithoutContainsInput!
}

input SkillTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  contains_every: SkillWhereInput
  contains_some: SkillWhereInput
  contains_none: SkillWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SkillTypeWhereInput!]
  OR: [SkillTypeWhereInput!]
  NOT: [SkillTypeWhereInput!]
}

input SkillTypeWhereUniqueInput {
  id: ID
}

input SkillUpdateDataInput {
  description: String
  type: SkillTypeUpdateOneRequiredWithoutContainsInput
  tradedIn: TradeUpdateManyWithoutSkillInput
  ratedIn: SkillUpdateManyInput
}

input SkillUpdateInput {
  description: String
  type: SkillTypeUpdateOneRequiredWithoutContainsInput
  tradedIn: TradeUpdateManyWithoutSkillInput
  ratedIn: SkillUpdateManyInput
}

input SkillUpdateManyDataInput {
  description: String
}

input SkillUpdateManyInput {
  create: [SkillCreateInput!]
  update: [SkillUpdateWithWhereUniqueNestedInput!]
  upsert: [SkillUpsertWithWhereUniqueNestedInput!]
  delete: [SkillWhereUniqueInput!]
  connect: [SkillWhereUniqueInput!]
  set: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  deleteMany: [SkillScalarWhereInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
}

input SkillUpdateManyMutationInput {
  description: String
}

input SkillUpdateManyWithoutTypeInput {
  create: [SkillCreateWithoutTypeInput!]
  delete: [SkillWhereUniqueInput!]
  connect: [SkillWhereUniqueInput!]
  set: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  update: [SkillUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [SkillUpsertWithWhereUniqueWithoutTypeInput!]
  deleteMany: [SkillScalarWhereInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
}

input SkillUpdateManyWithWhereNestedInput {
  where: SkillScalarWhereInput!
  data: SkillUpdateManyDataInput!
}

input SkillUpdateOneRequiredInput {
  create: SkillCreateInput
  update: SkillUpdateDataInput
  upsert: SkillUpsertNestedInput
  connect: SkillWhereUniqueInput
}

input SkillUpdateOneRequiredWithoutTradedInInput {
  create: SkillCreateWithoutTradedInInput
  update: SkillUpdateWithoutTradedInDataInput
  upsert: SkillUpsertWithoutTradedInInput
  connect: SkillWhereUniqueInput
}

input SkillUpdateWithoutTradedInDataInput {
  description: String
  type: SkillTypeUpdateOneRequiredWithoutContainsInput
  ratedIn: SkillUpdateManyInput
}

input SkillUpdateWithoutTypeDataInput {
  description: String
  tradedIn: TradeUpdateManyWithoutSkillInput
  ratedIn: SkillUpdateManyInput
}

input SkillUpdateWithWhereUniqueNestedInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateDataInput!
}

input SkillUpdateWithWhereUniqueWithoutTypeInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutTypeDataInput!
}

input SkillUpsertNestedInput {
  update: SkillUpdateDataInput!
  create: SkillCreateInput!
}

input SkillUpsertWithoutTradedInInput {
  update: SkillUpdateWithoutTradedInDataInput!
  create: SkillCreateWithoutTradedInInput!
}

input SkillUpsertWithWhereUniqueNestedInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateDataInput!
  create: SkillCreateInput!
}

input SkillUpsertWithWhereUniqueWithoutTypeInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateWithoutTypeDataInput!
  create: SkillCreateWithoutTypeInput!
}

input SkillWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: SkillTypeWhereInput
  tradedIn_every: TradeWhereInput
  tradedIn_some: TradeWhereInput
  tradedIn_none: TradeWhereInput
  ratedIn_every: SkillWhereInput
  ratedIn_some: SkillWhereInput
  ratedIn_none: SkillWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SkillWhereInput!]
  OR: [SkillWhereInput!]
  NOT: [SkillWhereInput!]
}

input SkillWhereUniqueInput {
  id: ID
}

type Subscription {
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
  skillType(where: SkillTypeSubscriptionWhereInput): SkillTypeSubscriptionPayload
  trade(where: TradeSubscriptionWhereInput): TradeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Trade {
  id: ID!
  user: User!
  skill: Skill!
  other: Trade
  scheduledFor: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TradeConnection {
  pageInfo: PageInfo!
  edges: [TradeEdge]!
  aggregate: AggregateTrade!
}

input TradeCreateInput {
  id: ID
  user: UserCreateOneInput!
  skill: SkillCreateOneWithoutTradedInInput!
  other: TradeCreateOneInput
  scheduledFor: DateTime
}

input TradeCreateManyWithoutSkillInput {
  create: [TradeCreateWithoutSkillInput!]
  connect: [TradeWhereUniqueInput!]
}

input TradeCreateOneInput {
  create: TradeCreateInput
  connect: TradeWhereUniqueInput
}

input TradeCreateWithoutSkillInput {
  id: ID
  user: UserCreateOneInput!
  other: TradeCreateOneInput
  scheduledFor: DateTime
}

type TradeEdge {
  node: Trade!
  cursor: String!
}

enum TradeOrderByInput {
  id_ASC
  id_DESC
  scheduledFor_ASC
  scheduledFor_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TradePreviousValues {
  id: ID!
  scheduledFor: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TradeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  scheduledFor: DateTime
  scheduledFor_not: DateTime
  scheduledFor_in: [DateTime!]
  scheduledFor_not_in: [DateTime!]
  scheduledFor_lt: DateTime
  scheduledFor_lte: DateTime
  scheduledFor_gt: DateTime
  scheduledFor_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TradeScalarWhereInput!]
  OR: [TradeScalarWhereInput!]
  NOT: [TradeScalarWhereInput!]
}

type TradeSubscriptionPayload {
  mutation: MutationType!
  node: Trade
  updatedFields: [String!]
  previousValues: TradePreviousValues
}

input TradeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TradeWhereInput
  AND: [TradeSubscriptionWhereInput!]
  OR: [TradeSubscriptionWhereInput!]
  NOT: [TradeSubscriptionWhereInput!]
}

input TradeUpdateDataInput {
  user: UserUpdateOneRequiredInput
  skill: SkillUpdateOneRequiredWithoutTradedInInput
  other: TradeUpdateOneInput
  scheduledFor: DateTime
}

input TradeUpdateInput {
  user: UserUpdateOneRequiredInput
  skill: SkillUpdateOneRequiredWithoutTradedInInput
  other: TradeUpdateOneInput
  scheduledFor: DateTime
}

input TradeUpdateManyDataInput {
  scheduledFor: DateTime
}

input TradeUpdateManyMutationInput {
  scheduledFor: DateTime
}

input TradeUpdateManyWithoutSkillInput {
  create: [TradeCreateWithoutSkillInput!]
  delete: [TradeWhereUniqueInput!]
  connect: [TradeWhereUniqueInput!]
  set: [TradeWhereUniqueInput!]
  disconnect: [TradeWhereUniqueInput!]
  update: [TradeUpdateWithWhereUniqueWithoutSkillInput!]
  upsert: [TradeUpsertWithWhereUniqueWithoutSkillInput!]
  deleteMany: [TradeScalarWhereInput!]
  updateMany: [TradeUpdateManyWithWhereNestedInput!]
}

input TradeUpdateManyWithWhereNestedInput {
  where: TradeScalarWhereInput!
  data: TradeUpdateManyDataInput!
}

input TradeUpdateOneInput {
  create: TradeCreateInput
  update: TradeUpdateDataInput
  upsert: TradeUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: TradeWhereUniqueInput
}

input TradeUpdateWithoutSkillDataInput {
  user: UserUpdateOneRequiredInput
  other: TradeUpdateOneInput
  scheduledFor: DateTime
}

input TradeUpdateWithWhereUniqueWithoutSkillInput {
  where: TradeWhereUniqueInput!
  data: TradeUpdateWithoutSkillDataInput!
}

input TradeUpsertNestedInput {
  update: TradeUpdateDataInput!
  create: TradeCreateInput!
}

input TradeUpsertWithWhereUniqueWithoutSkillInput {
  where: TradeWhereUniqueInput!
  update: TradeUpdateWithoutSkillDataInput!
  create: TradeCreateWithoutSkillInput!
}

input TradeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  skill: SkillWhereInput
  other: TradeWhereInput
  scheduledFor: DateTime
  scheduledFor_not: DateTime
  scheduledFor_in: [DateTime!]
  scheduledFor_not_in: [DateTime!]
  scheduledFor_lt: DateTime
  scheduledFor_lte: DateTime
  scheduledFor_gt: DateTime
  scheduledFor_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TradeWhereInput!]
  OR: [TradeWhereInput!]
  NOT: [TradeWhereInput!]
}

input TradeWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  ratedIn(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating!]
  authorOf(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  ratedIn: RatingCreateManyWithoutSubjectInput
  authorOf: RatingCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutAuthorOfInput {
  create: UserCreateWithoutAuthorOfInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRatedInInput {
  create: UserCreateWithoutRatedInInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAuthorOfInput {
  id: ID
  name: String!
  email: String!
  password: String!
  ratedIn: RatingCreateManyWithoutSubjectInput
}

input UserCreateWithoutRatedInInput {
  id: ID
  name: String!
  email: String!
  password: String!
  authorOf: RatingCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  ratedIn: RatingUpdateManyWithoutSubjectInput
  authorOf: RatingUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  ratedIn: RatingUpdateManyWithoutSubjectInput
  authorOf: RatingUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutAuthorOfInput {
  create: UserCreateWithoutAuthorOfInput
  update: UserUpdateWithoutAuthorOfDataInput
  upsert: UserUpsertWithoutAuthorOfInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutRatedInInput {
  create: UserCreateWithoutRatedInInput
  update: UserUpdateWithoutRatedInDataInput
  upsert: UserUpsertWithoutRatedInInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAuthorOfDataInput {
  name: String
  email: String
  password: String
  ratedIn: RatingUpdateManyWithoutSubjectInput
}

input UserUpdateWithoutRatedInDataInput {
  name: String
  email: String
  password: String
  authorOf: RatingUpdateManyWithoutAuthorInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutAuthorOfInput {
  update: UserUpdateWithoutAuthorOfDataInput!
  create: UserCreateWithoutAuthorOfInput!
}

input UserUpsertWithoutRatedInInput {
  update: UserUpdateWithoutRatedInDataInput!
  create: UserCreateWithoutRatedInInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  ratedIn_every: RatingWhereInput
  ratedIn_some: RatingWhereInput
  ratedIn_none: RatingWhereInput
  authorOf_every: RatingWhereInput
  authorOf_some: RatingWhereInput
  authorOf_none: RatingWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
  email: String
}
`
      }
    