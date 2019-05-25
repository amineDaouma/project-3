module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateRoutine {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createRoutine(data: RoutineCreateInput!): Routine!
  updateRoutine(data: RoutineUpdateInput!, where: RoutineWhereUniqueInput!): Routine
  updateManyRoutines(data: RoutineUpdateManyMutationInput!, where: RoutineWhereInput): BatchPayload!
  upsertRoutine(where: RoutineWhereUniqueInput!, create: RoutineCreateInput!, update: RoutineUpdateInput!): Routine!
  deleteRoutine(where: RoutineWhereUniqueInput!): Routine
  deleteManyRoutines(where: RoutineWhereInput): BatchPayload!
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
  routine(where: RoutineWhereUniqueInput!): Routine
  routines(where: RoutineWhereInput, orderBy: RoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Routine]!
  routinesConnection(where: RoutineWhereInput, orderBy: RoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoutineConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Routine {
  id: ID!
  name: String!
  ownedBy: User!
}

type RoutineConnection {
  pageInfo: PageInfo!
  edges: [RoutineEdge]!
  aggregate: AggregateRoutine!
}

input RoutineCreateInput {
  id: ID
  name: String!
  ownedBy: UserCreateOneWithoutRoutinesInput!
}

input RoutineCreateManyWithoutOwnedByInput {
  create: [RoutineCreateWithoutOwnedByInput!]
  connect: [RoutineWhereUniqueInput!]
}

input RoutineCreateWithoutOwnedByInput {
  id: ID
  name: String!
}

type RoutineEdge {
  node: Routine!
  cursor: String!
}

enum RoutineOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type RoutinePreviousValues {
  id: ID!
  name: String!
}

input RoutineScalarWhereInput {
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
  AND: [RoutineScalarWhereInput!]
  OR: [RoutineScalarWhereInput!]
  NOT: [RoutineScalarWhereInput!]
}

type RoutineSubscriptionPayload {
  mutation: MutationType!
  node: Routine
  updatedFields: [String!]
  previousValues: RoutinePreviousValues
}

input RoutineSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoutineWhereInput
  AND: [RoutineSubscriptionWhereInput!]
  OR: [RoutineSubscriptionWhereInput!]
  NOT: [RoutineSubscriptionWhereInput!]
}

input RoutineUpdateInput {
  name: String
  ownedBy: UserUpdateOneRequiredWithoutRoutinesInput
}

input RoutineUpdateManyDataInput {
  name: String
}

input RoutineUpdateManyMutationInput {
  name: String
}

input RoutineUpdateManyWithoutOwnedByInput {
  create: [RoutineCreateWithoutOwnedByInput!]
  delete: [RoutineWhereUniqueInput!]
  connect: [RoutineWhereUniqueInput!]
  set: [RoutineWhereUniqueInput!]
  disconnect: [RoutineWhereUniqueInput!]
  update: [RoutineUpdateWithWhereUniqueWithoutOwnedByInput!]
  upsert: [RoutineUpsertWithWhereUniqueWithoutOwnedByInput!]
  deleteMany: [RoutineScalarWhereInput!]
  updateMany: [RoutineUpdateManyWithWhereNestedInput!]
}

input RoutineUpdateManyWithWhereNestedInput {
  where: RoutineScalarWhereInput!
  data: RoutineUpdateManyDataInput!
}

input RoutineUpdateWithoutOwnedByDataInput {
  name: String
}

input RoutineUpdateWithWhereUniqueWithoutOwnedByInput {
  where: RoutineWhereUniqueInput!
  data: RoutineUpdateWithoutOwnedByDataInput!
}

input RoutineUpsertWithWhereUniqueWithoutOwnedByInput {
  where: RoutineWhereUniqueInput!
  update: RoutineUpdateWithoutOwnedByDataInput!
  create: RoutineCreateWithoutOwnedByInput!
}

input RoutineWhereInput {
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
  ownedBy: UserWhereInput
  AND: [RoutineWhereInput!]
  OR: [RoutineWhereInput!]
  NOT: [RoutineWhereInput!]
}

input RoutineWhereUniqueInput {
  id: ID
}

type Subscription {
  routine(where: RoutineSubscriptionWhereInput): RoutineSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  routines(where: RoutineWhereInput, orderBy: RoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Routine!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  routines: RoutineCreateManyWithoutOwnedByInput
}

input UserCreateOneWithoutRoutinesInput {
  create: UserCreateWithoutRoutinesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRoutinesInput {
  id: ID
  name: String!
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
}

type UserPreviousValues {
  id: ID!
  name: String!
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
  routines: RoutineUpdateManyWithoutOwnedByInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredWithoutRoutinesInput {
  create: UserCreateWithoutRoutinesInput
  update: UserUpdateWithoutRoutinesDataInput
  upsert: UserUpsertWithoutRoutinesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRoutinesDataInput {
  name: String
}

input UserUpsertWithoutRoutinesInput {
  update: UserUpdateWithoutRoutinesDataInput!
  create: UserCreateWithoutRoutinesInput!
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
  routines_every: RoutineWhereInput
  routines_some: RoutineWhereInput
  routines_none: RoutineWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    