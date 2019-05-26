// Code generated by Prisma (prisma@1.33.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  routine: (where?: RoutineWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  routine: (where: RoutineWhereUniqueInput) => RoutineNullablePromise;
  routines: (args?: {
    where?: RoutineWhereInput;
    orderBy?: RoutineOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Routine>;
  routinesConnection: (args?: {
    where?: RoutineWhereInput;
    orderBy?: RoutineOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RoutineConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRoutine: (data: RoutineCreateInput) => RoutinePromise;
  updateRoutine: (args: {
    data: RoutineUpdateInput;
    where: RoutineWhereUniqueInput;
  }) => RoutinePromise;
  updateManyRoutines: (args: {
    data: RoutineUpdateManyMutationInput;
    where?: RoutineWhereInput;
  }) => BatchPayloadPromise;
  upsertRoutine: (args: {
    where: RoutineWhereUniqueInput;
    create: RoutineCreateInput;
    update: RoutineUpdateInput;
  }) => RoutinePromise;
  deleteRoutine: (where: RoutineWhereUniqueInput) => RoutinePromise;
  deleteManyRoutines: (where?: RoutineWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  routine: (
    where?: RoutineSubscriptionWhereInput
  ) => RoutineSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RoutineOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type RoutineWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RoutineWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  ownedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<RoutineWhereInput[] | RoutineWhereInput>;
  OR?: Maybe<RoutineWhereInput[] | RoutineWhereInput>;
  NOT?: Maybe<RoutineWhereInput[] | RoutineWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  routines_every?: Maybe<RoutineWhereInput>;
  routines_some?: Maybe<RoutineWhereInput>;
  routines_none?: Maybe<RoutineWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RoutineCreateInput {
  id?: Maybe<ID_Input>;
  username: String;
  ownedBy: UserCreateOneWithoutRoutinesInput;
}

export interface UserCreateOneWithoutRoutinesInput {
  create?: Maybe<UserCreateWithoutRoutinesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutRoutinesInput {
  id?: Maybe<ID_Input>;
  username: String;
  password: String;
}

export interface RoutineUpdateInput {
  username?: Maybe<String>;
  ownedBy?: Maybe<UserUpdateOneRequiredWithoutRoutinesInput>;
}

export interface UserUpdateOneRequiredWithoutRoutinesInput {
  create?: Maybe<UserCreateWithoutRoutinesInput>;
  update?: Maybe<UserUpdateWithoutRoutinesDataInput>;
  upsert?: Maybe<UserUpsertWithoutRoutinesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutRoutinesDataInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpsertWithoutRoutinesInput {
  update: UserUpdateWithoutRoutinesDataInput;
  create: UserCreateWithoutRoutinesInput;
}

export interface RoutineUpdateManyMutationInput {
  username?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  username: String;
  password: String;
  routines?: Maybe<RoutineCreateManyWithoutOwnedByInput>;
}

export interface RoutineCreateManyWithoutOwnedByInput {
  create?: Maybe<
    RoutineCreateWithoutOwnedByInput[] | RoutineCreateWithoutOwnedByInput
  >;
  connect?: Maybe<RoutineWhereUniqueInput[] | RoutineWhereUniqueInput>;
}

export interface RoutineCreateWithoutOwnedByInput {
  id?: Maybe<ID_Input>;
  username: String;
}

export interface UserUpdateInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
  routines?: Maybe<RoutineUpdateManyWithoutOwnedByInput>;
}

export interface RoutineUpdateManyWithoutOwnedByInput {
  create?: Maybe<
    RoutineCreateWithoutOwnedByInput[] | RoutineCreateWithoutOwnedByInput
  >;
  delete?: Maybe<RoutineWhereUniqueInput[] | RoutineWhereUniqueInput>;
  connect?: Maybe<RoutineWhereUniqueInput[] | RoutineWhereUniqueInput>;
  set?: Maybe<RoutineWhereUniqueInput[] | RoutineWhereUniqueInput>;
  disconnect?: Maybe<RoutineWhereUniqueInput[] | RoutineWhereUniqueInput>;
  update?: Maybe<
    | RoutineUpdateWithWhereUniqueWithoutOwnedByInput[]
    | RoutineUpdateWithWhereUniqueWithoutOwnedByInput
  >;
  upsert?: Maybe<
    | RoutineUpsertWithWhereUniqueWithoutOwnedByInput[]
    | RoutineUpsertWithWhereUniqueWithoutOwnedByInput
  >;
  deleteMany?: Maybe<RoutineScalarWhereInput[] | RoutineScalarWhereInput>;
  updateMany?: Maybe<
    | RoutineUpdateManyWithWhereNestedInput[]
    | RoutineUpdateManyWithWhereNestedInput
  >;
}

export interface RoutineUpdateWithWhereUniqueWithoutOwnedByInput {
  where: RoutineWhereUniqueInput;
  data: RoutineUpdateWithoutOwnedByDataInput;
}

export interface RoutineUpdateWithoutOwnedByDataInput {
  username?: Maybe<String>;
}

export interface RoutineUpsertWithWhereUniqueWithoutOwnedByInput {
  where: RoutineWhereUniqueInput;
  update: RoutineUpdateWithoutOwnedByDataInput;
  create: RoutineCreateWithoutOwnedByInput;
}

export interface RoutineScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  username?: Maybe<String>;
  username_not?: Maybe<String>;
  username_in?: Maybe<String[] | String>;
  username_not_in?: Maybe<String[] | String>;
  username_lt?: Maybe<String>;
  username_lte?: Maybe<String>;
  username_gt?: Maybe<String>;
  username_gte?: Maybe<String>;
  username_contains?: Maybe<String>;
  username_not_contains?: Maybe<String>;
  username_starts_with?: Maybe<String>;
  username_not_starts_with?: Maybe<String>;
  username_ends_with?: Maybe<String>;
  username_not_ends_with?: Maybe<String>;
  AND?: Maybe<RoutineScalarWhereInput[] | RoutineScalarWhereInput>;
  OR?: Maybe<RoutineScalarWhereInput[] | RoutineScalarWhereInput>;
  NOT?: Maybe<RoutineScalarWhereInput[] | RoutineScalarWhereInput>;
}

export interface RoutineUpdateManyWithWhereNestedInput {
  where: RoutineScalarWhereInput;
  data: RoutineUpdateManyDataInput;
}

export interface RoutineUpdateManyDataInput {
  username?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  username?: Maybe<String>;
  password?: Maybe<String>;
}

export interface RoutineSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RoutineWhereInput>;
  AND?: Maybe<RoutineSubscriptionWhereInput[] | RoutineSubscriptionWhereInput>;
  OR?: Maybe<RoutineSubscriptionWhereInput[] | RoutineSubscriptionWhereInput>;
  NOT?: Maybe<RoutineSubscriptionWhereInput[] | RoutineSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Routine {
  id: ID_Output;
  username: String;
}

export interface RoutinePromise extends Promise<Routine>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  ownedBy: <T = UserPromise>() => T;
}

export interface RoutineSubscription
  extends Promise<AsyncIterator<Routine>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  ownedBy: <T = UserSubscription>() => T;
}

export interface RoutineNullablePromise
  extends Promise<Routine | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  ownedBy: <T = UserPromise>() => T;
}

export interface User {
  id: ID_Output;
  username: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  routines: <T = FragmentableArray<Routine>>(args?: {
    where?: RoutineWhereInput;
    orderBy?: RoutineOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  routines: <T = Promise<AsyncIterator<RoutineSubscription>>>(args?: {
    where?: RoutineWhereInput;
    orderBy?: RoutineOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
  routines: <T = FragmentableArray<Routine>>(args?: {
    where?: RoutineWhereInput;
    orderBy?: RoutineOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RoutineConnection {
  pageInfo: PageInfo;
  edges: RoutineEdge[];
}

export interface RoutineConnectionPromise
  extends Promise<RoutineConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RoutineEdge>>() => T;
  aggregate: <T = AggregateRoutinePromise>() => T;
}

export interface RoutineConnectionSubscription
  extends Promise<AsyncIterator<RoutineConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RoutineEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRoutineSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface RoutineEdge {
  node: Routine;
  cursor: String;
}

export interface RoutineEdgePromise extends Promise<RoutineEdge>, Fragmentable {
  node: <T = RoutinePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RoutineEdgeSubscription
  extends Promise<AsyncIterator<RoutineEdge>>,
    Fragmentable {
  node: <T = RoutineSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRoutine {
  count: Int;
}

export interface AggregateRoutinePromise
  extends Promise<AggregateRoutine>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRoutineSubscription
  extends Promise<AsyncIterator<AggregateRoutine>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface RoutineSubscriptionPayload {
  mutation: MutationType;
  node: Routine;
  updatedFields: String[];
  previousValues: RoutinePreviousValues;
}

export interface RoutineSubscriptionPayloadPromise
  extends Promise<RoutineSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RoutinePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RoutinePreviousValuesPromise>() => T;
}

export interface RoutineSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RoutineSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RoutineSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RoutinePreviousValuesSubscription>() => T;
}

export interface RoutinePreviousValues {
  id: ID_Output;
  username: String;
}

export interface RoutinePreviousValuesPromise
  extends Promise<RoutinePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
}

export interface RoutinePreviousValuesSubscription
  extends Promise<AsyncIterator<RoutinePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  username: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Routine",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
