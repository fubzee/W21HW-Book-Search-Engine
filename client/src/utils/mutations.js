import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!) {
        addUser(username: $username) {
        _id
        username
        email
        password
        }
    }
`;
export const ADD_BOOK = gql`
    mutation addBook($username: String,$savedBooks: String!) {
        savedBook (username: $username) {
        savedbooks
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($username: String!, $password:String!) {
        login (username: $username, password: $password) {
            username
            password
        }
    }
`;