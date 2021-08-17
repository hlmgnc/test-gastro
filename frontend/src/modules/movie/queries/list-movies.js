import { gql } from "@apollo/client";

export const LIST_MOVIES = gql`
  query {
    listMovies {
      _id
      name
      duration
      actors
      releaseDate
      averageRating
      ratings {
        userId
        value
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
