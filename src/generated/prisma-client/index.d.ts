// Code generated by Prisma (prisma@1.26.6). DO NOT EDIT.
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

export interface Exists {
  book: (where?: BookWhereInput) => Promise<boolean>;
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

  book: (where: BookWhereUniqueInput) => BookPromise;
  books: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Book>;
  booksConnection: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BookConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
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

  createBook: (data: BookCreateInput) => BookPromise;
  updateBook: (args: {
    data: BookUpdateInput;
    where: BookWhereUniqueInput;
  }) => BookPromise;
  updateManyBooks: (args: {
    data: BookUpdateManyMutationInput;
    where?: BookWhereInput;
  }) => BatchPayloadPromise;
  upsertBook: (args: {
    where: BookWhereUniqueInput;
    create: BookCreateInput;
    update: BookUpdateInput;
  }) => BookPromise;
  deleteBook: (where: BookWhereUniqueInput) => BookPromise;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayloadPromise;
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
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
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

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "author_ASC"
  | "author_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type BookWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface BookWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  author?: String;
  author_not?: String;
  author_in?: String[] | String;
  author_not_in?: String[] | String;
  author_lt?: String;
  author_lte?: String;
  author_gt?: String;
  author_gte?: String;
  author_contains?: String;
  author_not_contains?: String;
  author_starts_with?: String;
  author_not_starts_with?: String;
  author_ends_with?: String;
  author_not_ends_with?: String;
  user?: UserWhereInput;
  AND?: BookWhereInput[] | BookWhereInput;
  OR?: BookWhereInput[] | BookWhereInput;
  NOT?: BookWhereInput[] | BookWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  books_every?: BookWhereInput;
  books_some?: BookWhereInput;
  books_none?: BookWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  username?: String;
}>;

export interface BookCreateInput {
  title: String;
  author: String;
  user?: UserCreateOneWithoutBooksInput;
}

export interface UserCreateOneWithoutBooksInput {
  create?: UserCreateWithoutBooksInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutBooksInput {
  username: String;
}

export interface BookUpdateInput {
  title?: String;
  author?: String;
  user?: UserUpdateOneWithoutBooksInput;
}

export interface UserUpdateOneWithoutBooksInput {
  create?: UserCreateWithoutBooksInput;
  update?: UserUpdateWithoutBooksDataInput;
  upsert?: UserUpsertWithoutBooksInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutBooksDataInput {
  username?: String;
}

export interface UserUpsertWithoutBooksInput {
  update: UserUpdateWithoutBooksDataInput;
  create: UserCreateWithoutBooksInput;
}

export interface BookUpdateManyMutationInput {
  title?: String;
  author?: String;
}

export interface UserCreateInput {
  username: String;
  books?: BookCreateManyWithoutUserInput;
}

export interface BookCreateManyWithoutUserInput {
  create?: BookCreateWithoutUserInput[] | BookCreateWithoutUserInput;
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput;
}

export interface BookCreateWithoutUserInput {
  title: String;
  author: String;
}

export interface UserUpdateInput {
  username?: String;
  books?: BookUpdateManyWithoutUserInput;
}

export interface BookUpdateManyWithoutUserInput {
  create?: BookCreateWithoutUserInput[] | BookCreateWithoutUserInput;
  delete?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  connect?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  set?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  disconnect?: BookWhereUniqueInput[] | BookWhereUniqueInput;
  update?:
    | BookUpdateWithWhereUniqueWithoutUserInput[]
    | BookUpdateWithWhereUniqueWithoutUserInput;
  upsert?:
    | BookUpsertWithWhereUniqueWithoutUserInput[]
    | BookUpsertWithWhereUniqueWithoutUserInput;
  deleteMany?: BookScalarWhereInput[] | BookScalarWhereInput;
  updateMany?:
    | BookUpdateManyWithWhereNestedInput[]
    | BookUpdateManyWithWhereNestedInput;
}

export interface BookUpdateWithWhereUniqueWithoutUserInput {
  where: BookWhereUniqueInput;
  data: BookUpdateWithoutUserDataInput;
}

export interface BookUpdateWithoutUserDataInput {
  title?: String;
  author?: String;
}

export interface BookUpsertWithWhereUniqueWithoutUserInput {
  where: BookWhereUniqueInput;
  update: BookUpdateWithoutUserDataInput;
  create: BookCreateWithoutUserInput;
}

export interface BookScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  author?: String;
  author_not?: String;
  author_in?: String[] | String;
  author_not_in?: String[] | String;
  author_lt?: String;
  author_lte?: String;
  author_gt?: String;
  author_gte?: String;
  author_contains?: String;
  author_not_contains?: String;
  author_starts_with?: String;
  author_not_starts_with?: String;
  author_ends_with?: String;
  author_not_ends_with?: String;
  AND?: BookScalarWhereInput[] | BookScalarWhereInput;
  OR?: BookScalarWhereInput[] | BookScalarWhereInput;
  NOT?: BookScalarWhereInput[] | BookScalarWhereInput;
}

export interface BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput;
  data: BookUpdateManyDataInput;
}

export interface BookUpdateManyDataInput {
  title?: String;
  author?: String;
}

export interface UserUpdateManyMutationInput {
  username?: String;
}

export interface BookSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: BookWhereInput;
  AND?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
  OR?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
  NOT?: BookSubscriptionWhereInput[] | BookSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Book {
  id: ID_Output;
  title: String;
  author: String;
}

export interface BookPromise extends Promise<Book>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
  user: <T = UserPromise>() => T;
}

export interface BookSubscription
  extends Promise<AsyncIterator<Book>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
}

export interface User {
  id: ID_Output;
  username: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  books: <T = FragmentableArray<Book>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
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
  books: <T = Promise<AsyncIterator<BookSubscription>>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface BookConnection {
  pageInfo: PageInfo;
  edges: BookEdge[];
}

export interface BookConnectionPromise
  extends Promise<BookConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BookEdge>>() => T;
  aggregate: <T = AggregateBookPromise>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBookSubscription>() => T;
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

export interface BookEdge {
  node: Book;
  cursor: String;
}

export interface BookEdgePromise extends Promise<BookEdge>, Fragmentable {
  node: <T = BookPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdge>>,
    Fragmentable {
  node: <T = BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateBook {
  count: Int;
}

export interface AggregateBookPromise
  extends Promise<AggregateBook>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBook>>,
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

export interface BookSubscriptionPayload {
  mutation: MutationType;
  node: Book;
  updatedFields: String[];
  previousValues: BookPreviousValues;
}

export interface BookSubscriptionPayloadPromise
  extends Promise<BookSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BookPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BookPreviousValuesPromise>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BookPreviousValuesSubscription>() => T;
}

export interface BookPreviousValues {
  id: ID_Output;
  title: String;
  author: String;
}

export interface BookPreviousValuesPromise
  extends Promise<BookPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  author: () => Promise<String>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
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
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
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
    name: "Book",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
