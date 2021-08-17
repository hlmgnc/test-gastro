import { gql } from "@apollo/client";

export const ADD_MOVIE_MUTATION = gql`
  mutation addMovie(
    $name: String!
    $duration: Int!
    $actors: String!
    $releaseDate: String
    $createdBy: ID!
  ) {
    addMovie(
      name: $name
      duration: $duration
      actors: $actors
      releaseDate: $releaseDate
      createdBy: $createdBy
    ) {
      name
    }
  }
`;
