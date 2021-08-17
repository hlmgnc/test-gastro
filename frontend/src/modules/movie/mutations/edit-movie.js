import { gql } from "@apollo/client";

export const EDIT_MOVIE_MUTATION = gql`
  mutation editMovie(
    $id: ID!
    $name: String!
    $duration: Int!
    $actors: String!
    $releaseDate: String
  ) {
    editMovie(
      id: $id
      name: $name
      duration: $duration
      actors: $actors
      releaseDate: $releaseDate
    ) {
      name
    }
  }
`;
