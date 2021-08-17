import { gql } from "@apollo/client";

export const DELETE_MOVIE_MUTATION = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      message
    }
  }
`;
