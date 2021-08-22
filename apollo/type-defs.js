import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Post {
      id: ID!
      title: String!
      description: String
      status: String!
      date_created: String!
      author: User
  }

  type Query {
    users: [User]
    posts: [Post]
    post(id: Int!): Post
  }
`
