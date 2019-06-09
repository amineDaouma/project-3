module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateDay {
  count: Int!
}

type AggregateRoutine {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Day {
  id: ID!
  date: DateTime!
  isCompleted: Boolean!
}

type DayConnection {
  pageInfo: PageInfo!
  edges: [DayEdge]!
  aggregate: AggregateDay!
}

input DayCreateInput {
  id: ID
  date: DateTime!
  isCompleted: Boolean!
}

input DayCreateManyInput {
  create: [DayCreateInput!]
  connect: [DayWhereUniqueInput!]
}

type DayEdge {
  node: Day!
  cursor: String!
}

enum DayOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  isCompleted_ASC
  isCompleted_DESC
}

type DayPreviousValues {
  id: ID!
  date: DateTime!
  isCompleted: Boolean!
}

input DayScalarWhereInput {
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
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  isCompleted: Boolean
  isCompleted_not: Boolean
  AND: [DayScalarWhereInput!]
  OR: [DayScalarWhereInput!]
  NOT: [DayScalarWhereInput!]
}

type DaySubscriptionPayload {
  mutation: MutationType!
  node: Day
  updatedFields: [String!]
  previousValues: DayPreviousValues
}

input DaySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DayWhereInput
  AND: [DaySubscriptionWhereInput!]
  OR: [DaySubscriptionWhereInput!]
  NOT: [DaySubscriptionWhereInput!]
}

input DayUpdateDataInput {
  date: DateTime
  isCompleted: Boolean
}

input DayUpdateInput {
  date: DateTime
  isCompleted: Boolean
}

input DayUpdateManyDataInput {
  date: DateTime
  isCompleted: Boolean
}

input DayUpdateManyInput {
  create: [DayCreateInput!]
  update: [DayUpdateWithWhereUniqueNestedInput!]
  upsert: [DayUpsertWithWhereUniqueNestedInput!]
  delete: [DayWhereUniqueInput!]
  connect: [DayWhereUniqueInput!]
  set: [DayWhereUniqueInput!]
  disconnect: [DayWhereUniqueInput!]
  deleteMany: [DayScalarWhereInput!]
  updateMany: [DayUpdateManyWithWhereNestedInput!]
}

input DayUpdateManyMutationInput {
  date: DateTime
  isCompleted: Boolean
}

input DayUpdateManyWithWhereNestedInput {
  where: DayScalarWhereInput!
  data: DayUpdateManyDataInput!
}

input DayUpdateWithWhereUniqueNestedInput {
  where: DayWhereUniqueInput!
  data: DayUpdateDataInput!
}

input DayUpsertWithWhereUniqueNestedInput {
  where: DayWhereUniqueInput!
  update: DayUpdateDataInput!
  create: DayCreateInput!
}

input DayWhereInput {
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
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  isCompleted: Boolean
  isCompleted_not: Boolean
  AND: [DayWhereInput!]
  OR: [DayWhereInput!]
  NOT: [DayWhereInput!]
}

input DayWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDay(data: DayCreateInput!): Day!
  updateDay(data: DayUpdateInput!, where: DayWhereUniqueInput!): Day
  updateManyDays(data: DayUpdateManyMutationInput!, where: DayWhereInput): BatchPayload!
  upsertDay(where: DayWhereUniqueInput!, create: DayCreateInput!, update: DayUpdateInput!): Day!
  deleteDay(where: DayWhereUniqueInput!): Day
  deleteManyDays(where: DayWhereInput): BatchPayload!
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
  day(where: DayWhereUniqueInput!): Day
  days(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Day]!
  daysConnection(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DayConnection!
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
  days(where: DayWhereInput, orderBy: DayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Day!]
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
  days: DayCreateManyInput
}

input RoutineCreateManyWithoutOwnedByInput {
  create: [RoutineCreateWithoutOwnedByInput!]
  connect: [RoutineWhereUniqueInput!]
}

input RoutineCreateWithoutOwnedByInput {
  id: ID
  name: String!
  days: DayCreateManyInput
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
  days: DayUpdateManyInput
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
  days: DayUpdateManyInput
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
  days_every: DayWhereInput
  days_some: DayWhereInput
  days_none: DayWhereInput
  AND: [RoutineWhereInput!]
  OR: [RoutineWhereInput!]
  NOT: [RoutineWhereInput!]
}

input RoutineWhereUniqueInput {
  id: ID
}

type Subscription {
  day(where: DaySubscriptionWhereInput): DaySubscriptionPayload
  routine(where: RoutineSubscriptionWhereInput): RoutineSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  password: String!
  routines(where: RoutineWhereInput, orderBy: RoutineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Routine!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  password: String!
  routines: RoutineCreateManyWithoutOwnedByInput
}

input UserCreateOneWithoutRoutinesInput {
  create: UserCreateWithoutRoutinesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRoutinesInput {
  id: ID
  username: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
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
  username: String
  password: String
  routines: RoutineUpdateManyWithoutOwnedByInput
}

input UserUpdateManyMutationInput {
  username: String
  password: String
}

input UserUpdateOneRequiredWithoutRoutinesInput {
  create: UserCreateWithoutRoutinesInput
  update: UserUpdateWithoutRoutinesDataInput
  upsert: UserUpsertWithoutRoutinesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutRoutinesDataInput {
  username: String
  password: String
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
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
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
  routines_every: RoutineWhereInput
  routines_some: RoutineWhereInput
  routines_none: RoutineWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    