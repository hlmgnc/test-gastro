import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      id
      username
    }
  }
`;
