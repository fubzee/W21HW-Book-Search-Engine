const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [String]
    }
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        login(username: String!, password: String!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!) : User
        login(username: String!, password: String!): Auth
        removeUser(username: String!): User
        saveBook(id: ID!, savedBooks: String!) : User
        deleteBook(id: ID!, bookid: String!) : User

        
    }
`;

module.exports = typeDefs;