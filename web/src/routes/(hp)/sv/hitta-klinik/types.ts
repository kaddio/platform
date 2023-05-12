export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  user?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  search: Array<SearchResult>;
  myChats: Array<Chat>;
  findOrganizations?: Maybe<Array<Maybe<Organization>>>;
  findOrganization?: Maybe<Organization>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  term: Scalars['String'];
};


export type QueryFindOrganizationsArgs = {
  geoQuery?: InputMaybe<GeoQuery>;
  keyword?: InputMaybe<KeyWord>;
  name?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryFindOrganizationArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type Node = {
  id: Scalars['ID'];
};

export type SearchResult = User | Chat | ChatMessage;

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  role: Role;
};

export type Chat = Node & {
  __typename?: 'Chat';
  id: Scalars['ID'];
  users: Array<User>;
  messages: Array<ChatMessage>;
};

export type ChatMessage = Node & {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
  content: Scalars['String'];
  time: Scalars['Date'];
  user: User;
};

export enum KeyWord {
  Osteopath = 'OSTEOPATH',
  Psychologist = 'PSYCHOLOGIST',
  Cbt = 'CBT',
  Massage = 'MASSAGE'
}

export type GeoQuery = {
  lat?: InputMaybe<Scalars['Float']>;
  long?: InputMaybe<Scalars['Float']>;
  radius?: InputMaybe<Scalars['Float']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  presentation: Scalars['String'];
  headerImg?: Maybe<Scalars['String']>;
  pics?: Maybe<Array<Maybe<Scalars['String']>>>;
  showPlaces?: Maybe<Scalars['Boolean']>;
  showUs?: Maybe<Scalars['Boolean']>;
};

export type Organization = {
  __typename?: 'Organization';
  _id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  hostCount: Scalars['Int'];
  hosts?: Maybe<Array<Maybe<Host>>>;
  bookingTypes?: Maybe<Array<Maybe<BookingType>>>;
  bookingTypeCount: Scalars['Int'];
  keywords?: Maybe<Array<Maybe<KeyWord>>>;
  nextFreeTime?: Maybe<Scalars['Date']>;
  homepage?: Maybe<Homepage>;
};

export type Host = {
  __typename?: 'Host';
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  fullname: Scalars['String'];
  presentation: Scalars['String'];
  imgUrl: Scalars['String'];
  nextFreeTime?: Maybe<Scalars['Date']>;
};

export type BookingType = {
  __typename?: 'BookingType';
  name: Scalars['String'];
  description: Scalars['String'];
  clientVisibleLength: Scalars['Int'];
  price: Scalars['Int'];
  nextFreeTime?: Maybe<Scalars['Date']>;
};
