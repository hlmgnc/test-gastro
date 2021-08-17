import { gql } from "@apollo/client";

export const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    getMovie(id: $id) {
      _id
      name
      duration
      actors
      releaseDate
      createdBy
    }
  }
`;
