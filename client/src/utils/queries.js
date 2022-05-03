import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users($username) {
    user {
        username: $username {
            _id
            username
            email
            [savedBooks]
        }
    }
} 
`