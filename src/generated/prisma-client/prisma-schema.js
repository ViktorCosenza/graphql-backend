module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateOffer {
  count: Int!
}

type AggregateRating {
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
  createOffer(data: OfferCreateInput!): Offer!
  updateOffer(data: OfferUpdateInput!, where: OfferWhereUniqueInput!): Offer
  upsertOffer(where: OfferWhereUniqueInput!, create: OfferCreateInput!, update: OfferUpdateInput!): Offer!
  deleteOffer(where: OfferWhereUniqueInput!): Offer
  deleteManyOffers(where: OfferWhereInput): BatchPayload!
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

type Offer {
  id: ID!
  offeredBy: User!
  skill: Skill!
  tradedIn(where: TradeWhereInput, orderBy: TradeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trade!]
  ratedBy(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OfferConnection {
  pageInfo: PageInfo!
  edges: [OfferEdge]!
  aggregate: AggregateOffer!
}

input OfferCreateInput {
  id: ID
  offeredBy: UserCreateOneWithoutOffersInput!
  skill: SkillCreateOneWithoutOfferedInInput!
  tradedIn: TradeCreateManyWithoutOfferInput
  ratedBy: RatingCreateManyWithoutSubjectInput
}

input OfferCreateManyWithoutOfferedByInput {
  create: [OfferCreateWithoutOfferedByInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateManyWithoutSkillInput {
  create: [OfferCreateWithoutSkillInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateOneWithoutRatedByInput {
  create: OfferCreateWithoutRatedByInput
  connect: OfferWhereUniqueInput
}

input OfferCreateOneWithoutTradedInInput {
  create: OfferCreateWithoutTradedInInput
  connect: OfferWhereUniqueInput
}

input OfferCreateWithoutOfferedByInput {
  id: ID
  skill: SkillCreateOneWithoutOfferedInInput!
  tradedIn: TradeCreateManyWithoutOfferInput
  ratedBy: RatingCreateManyWithoutSubjectInput
}

input OfferCreateWithoutRatedByInput {
  id: ID
  offeredBy: UserCreateOneWithoutOffersInput!
  skill: SkillCreateOneWithoutOfferedInInput!
  tradedIn: TradeCreateManyWithoutOfferInput
}

input OfferCreateWithoutSkillInput {
  id: ID
  offeredBy: UserCreateOneWithoutOffersInput!
  tradedIn: TradeCreateManyWithoutOfferInput
  ratedBy: RatingCreateManyWithoutSubjectInput
}

input OfferCreateWithoutTradedInInput {
  id: ID
  offeredBy: UserCreateOneWithoutOffersInput!
  skill: SkillCreateOneWithoutOfferedInInput!
  ratedBy: RatingCreateManyWithoutSubjectInput
}

type OfferEdge {
  node: Offer!
  cursor: String!
}

enum OfferOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OfferPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input OfferScalarWhereInput {
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
  AND: [OfferScalarWhereInput!]
  OR: [OfferScalarWhereInput!]
  NOT: [OfferScalarWhereInput!]
}

type OfferSubscriptionPayload {
  mutation: MutationType!
  node: Offer
  updatedFields: [String!]
  previousValues: OfferPreviousValues
}

input OfferSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OfferWhereInput
  AND: [OfferSubscriptionWhereInput!]
  OR: [OfferSubscriptionWhereInput!]
  NOT: [OfferSubscriptionWhereInput!]
}

input OfferUpdateInput {
  offeredBy: UserUpdateOneRequiredWithoutOffersInput
  skill: SkillUpdateOneRequiredWithoutOfferedInInput
  tradedIn: TradeUpdateManyWithoutOfferInput
  ratedBy: RatingUpdateManyWithoutSubjectInput
}

input OfferUpdateManyWithoutOfferedByInput {
  create: [OfferCreateWithoutOfferedByInput!]
  delete: [OfferWhereUniqueInput!]
  connect: [OfferWhereUniqueInput!]
  set: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutOfferedByInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutOfferedByInput!]
  deleteMany: [OfferScalarWhereInput!]
}

input OfferUpdateManyWithoutSkillInput {
  create: [OfferCreateWithoutSkillInput!]
  delete: [OfferWhereUniqueInput!]
  connect: [OfferWhereUniqueInput!]
  set: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutSkillInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutSkillInput!]
  deleteMany: [OfferScalarWhereInput!]
}

input OfferUpdateOneRequiredWithoutRatedByInput {
  create: OfferCreateWithoutRatedByInput
  update: OfferUpdateWithoutRatedByDataInput
  upsert: OfferUpsertWithoutRatedByInput
  connect: OfferWhereUniqueInput
}

input OfferUpdateOneRequiredWithoutTradedInInput {
  create: OfferCreateWithoutTradedInInput
  update: OfferUpdateWithoutTradedInDataInput
  upsert: OfferUpsertWithoutTradedInInput
  connect: OfferWhereUniqueInput
}

input OfferUpdateWithoutOfferedByDataInput {
  skill: SkillUpdateOneRequiredWithoutOfferedInInput
  tradedIn: TradeUpdateManyWithoutOfferInput
  ratedBy: RatingUpdateManyWithoutSubjectInput
}

input OfferUpdateWithoutRatedByDataInput {
  offeredBy: UserUpdateOneRequiredWithoutOffersInput
  skill: SkillUpdateOneRequiredWithoutOfferedInInput
  tradedIn: TradeUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutSkillDataInput {
  offeredBy: UserUpdateOneRequiredWithoutOffersInput
  tradedIn: TradeUpdateManyWithoutOfferInput
  ratedBy: RatingUpdateManyWithoutSubjectInput
}

input OfferUpdateWithoutTradedInDataInput {
  offeredBy: UserUpdateOneRequiredWithoutOffersInput
  skill: SkillUpdateOneRequiredWithoutOfferedInInput
  ratedBy: RatingUpdateManyWithoutSubjectInput
}

input OfferUpdateWithWhereUniqueWithoutOfferedByInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutOfferedByDataInput!
}

input OfferUpdateWithWhereUniqueWithoutSkillInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutSkillDataInput!
}

input OfferUpsertWithoutRatedByInput {
  update: OfferUpdateWithoutRatedByDataInput!
  create: OfferCreateWithoutRatedByInput!
}

input OfferUpsertWithoutTradedInInput {
  update: OfferUpdateWithoutTradedInDataInput!
  create: OfferCreateWithoutTradedInInput!
}

input OfferUpsertWithWhereUniqueWithoutOfferedByInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutOfferedByDataInput!
  create: OfferCreateWithoutOfferedByInput!
}

input OfferUpsertWithWhereUniqueWithoutSkillInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutSkillDataInput!
  create: OfferCreateWithoutSkillInput!
}

input OfferWhereInput {
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
  offeredBy: UserWhereInput
  skill: SkillWhereInput
  tradedIn_every: TradeWhereInput
  tradedIn_some: TradeWhereInput
  tradedIn_none: TradeWhereInput
  ratedBy_every: RatingWhereInput
  ratedBy_some: RatingWhereInput
  ratedBy_none: RatingWhereInput
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
  AND: [OfferWhereInput!]
  OR: [OfferWhereInput!]
  NOT: [OfferWhereInput!]
}

input OfferWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  offer(where: OfferWhereUniqueInput!): Offer
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer]!
  offersConnection(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferConnection!
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
  subject: Offer!
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
  subject: OfferCreateOneWithoutRatedByInput!
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
  subject: OfferCreateOneWithoutRatedByInput!
}

input RatingCreateWithoutSubjectInput {
  id: ID
  author: UserCreateOneWithoutAuthorOfInput!
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
  subject: OfferUpdateOneRequiredWithoutRatedByInput
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
  subject: OfferUpdateOneRequiredWithoutRatedByInput
}

input RatingUpdateWithoutSubjectDataInput {
  author: UserUpdateOneRequiredWithoutAuthorOfInput
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
  subject: OfferWhereInput
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
  name: String!
  description: String!
  type: SkillType!
  offeredIn(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
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
  name: String!
  description: String!
  type: SkillTypeCreateOneWithoutContainsInput!
  offeredIn: OfferCreateManyWithoutSkillInput
}

input SkillCreateManyWithoutTypeInput {
  create: [SkillCreateWithoutTypeInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateOneWithoutOfferedInInput {
  create: SkillCreateWithoutOfferedInInput
  connect: SkillWhereUniqueInput
}

input SkillCreateWithoutOfferedInInput {
  id: ID
  name: String!
  description: String!
  type: SkillTypeCreateOneWithoutContainsInput!
}

input SkillCreateWithoutTypeInput {
  id: ID
  name: String!
  description: String!
  offeredIn: OfferCreateManyWithoutSkillInput
}

type SkillEdge {
  node: Skill!
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillPreviousValues {
  id: ID!
  name: String!
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
  name: String!
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
  name: String!
  description: String!
  contains: SkillCreateManyWithoutTypeInput
}

input SkillTypeCreateOneWithoutContainsInput {
  create: SkillTypeCreateWithoutContainsInput
  connect: SkillTypeWhereUniqueInput
}

input SkillTypeCreateWithoutContainsInput {
  id: ID
  name: String!
  description: String!
}

type SkillTypeEdge {
  node: SkillType!
  cursor: String!
}

enum SkillTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkillTypePreviousValues {
  id: ID!
  name: String!
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
  name: String
  description: String
  contains: SkillUpdateManyWithoutTypeInput
}

input SkillTypeUpdateManyMutationInput {
  name: String
  description: String
}

input SkillTypeUpdateOneRequiredWithoutContainsInput {
  create: SkillTypeCreateWithoutContainsInput
  update: SkillTypeUpdateWithoutContainsDataInput
  upsert: SkillTypeUpsertWithoutContainsInput
  connect: SkillTypeWhereUniqueInput
}

input SkillTypeUpdateWithoutContainsDataInput {
  name: String
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

input SkillUpdateInput {
  name: String
  description: String
  type: SkillTypeUpdateOneRequiredWithoutContainsInput
  offeredIn: OfferUpdateManyWithoutSkillInput
}

input SkillUpdateManyDataInput {
  name: String
  description: String
}

input SkillUpdateManyMutationInput {
  name: String
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

input SkillUpdateOneRequiredWithoutOfferedInInput {
  create: SkillCreateWithoutOfferedInInput
  update: SkillUpdateWithoutOfferedInDataInput
  upsert: SkillUpsertWithoutOfferedInInput
  connect: SkillWhereUniqueInput
}

input SkillUpdateWithoutOfferedInDataInput {
  name: String
  description: String
  type: SkillTypeUpdateOneRequiredWithoutContainsInput
}

input SkillUpdateWithoutTypeDataInput {
  name: String
  description: String
  offeredIn: OfferUpdateManyWithoutSkillInput
}

input SkillUpdateWithWhereUniqueWithoutTypeInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutTypeDataInput!
}

input SkillUpsertWithoutOfferedInInput {
  update: SkillUpdateWithoutOfferedInDataInput!
  create: SkillCreateWithoutOfferedInInput!
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
  offeredIn_every: OfferWhereInput
  offeredIn_some: OfferWhereInput
  offeredIn_none: OfferWhereInput
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
  offer(where: OfferSubscriptionWhereInput): OfferSubscriptionPayload
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
  skillType(where: SkillTypeSubscriptionWhereInput): SkillTypeSubscriptionPayload
  trade(where: TradeSubscriptionWhereInput): TradeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Trade {
  id: ID!
  offer: Offer!
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
  offer: OfferCreateOneWithoutTradedInInput!
  other: TradeCreateOneInput
  scheduledFor: DateTime
}

input TradeCreateManyWithoutOfferInput {
  create: [TradeCreateWithoutOfferInput!]
  connect: [TradeWhereUniqueInput!]
}

input TradeCreateOneInput {
  create: TradeCreateInput
  connect: TradeWhereUniqueInput
}

input TradeCreateWithoutOfferInput {
  id: ID
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
  offer: OfferUpdateOneRequiredWithoutTradedInInput
  other: TradeUpdateOneInput
  scheduledFor: DateTime
}

input TradeUpdateInput {
  offer: OfferUpdateOneRequiredWithoutTradedInInput
  other: TradeUpdateOneInput
  scheduledFor: DateTime
}

input TradeUpdateManyDataInput {
  scheduledFor: DateTime
}

input TradeUpdateManyMutationInput {
  scheduledFor: DateTime
}

input TradeUpdateManyWithoutOfferInput {
  create: [TradeCreateWithoutOfferInput!]
  delete: [TradeWhereUniqueInput!]
  connect: [TradeWhereUniqueInput!]
  set: [TradeWhereUniqueInput!]
  disconnect: [TradeWhereUniqueInput!]
  update: [TradeUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [TradeUpsertWithWhereUniqueWithoutOfferInput!]
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

input TradeUpdateWithoutOfferDataInput {
  other: TradeUpdateOneInput
  scheduledFor: DateTime
}

input TradeUpdateWithWhereUniqueWithoutOfferInput {
  where: TradeWhereUniqueInput!
  data: TradeUpdateWithoutOfferDataInput!
}

input TradeUpsertNestedInput {
  update: TradeUpdateDataInput!
  create: TradeCreateInput!
}

input TradeUpsertWithWhereUniqueWithoutOfferInput {
  where: TradeWhereUniqueInput!
  update: TradeUpdateWithoutOfferDataInput!
  create: TradeCreateWithoutOfferInput!
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
  offer: OfferWhereInput
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
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
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
  offers: OfferCreateManyWithoutOfferedByInput
  authorOf: RatingCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutAuthorOfInput {
  create: UserCreateWithoutAuthorOfInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOffersInput {
  create: UserCreateWithoutOffersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAuthorOfInput {
  id: ID
  name: String!
  email: String!
  password: String!
  offers: OfferCreateManyWithoutOfferedByInput
}

input UserCreateWithoutOffersInput {
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

input UserUpdateInput {
  name: String
  email: String
  password: String
  offers: OfferUpdateManyWithoutOfferedByInput
  authorOf: RatingUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutAuthorOfInput {
  create: UserCreateWithoutAuthorOfInput
  update: UserUpdateWithoutAuthorOfDataInput
  upsert: UserUpsertWithoutAuthorOfInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOffersInput {
  create: UserCreateWithoutOffersInput
  update: UserUpdateWithoutOffersDataInput
  upsert: UserUpsertWithoutOffersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAuthorOfDataInput {
  name: String
  email: String
  password: String
  offers: OfferUpdateManyWithoutOfferedByInput
}

input UserUpdateWithoutOffersDataInput {
  name: String
  email: String
  password: String
  authorOf: RatingUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutAuthorOfInput {
  update: UserUpdateWithoutAuthorOfDataInput!
  create: UserCreateWithoutAuthorOfInput!
}

input UserUpsertWithoutOffersInput {
  update: UserUpdateWithoutOffersDataInput!
  create: UserCreateWithoutOffersInput!
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
  offers_every: OfferWhereInput
  offers_some: OfferWhereInput
  offers_none: OfferWhereInput
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
    