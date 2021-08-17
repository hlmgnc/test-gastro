import Auth from "./auth";
import Movie from "./movie";

const Common = `
  type Query {
    currentUser: User!
    listMovies: [Movie]
    getMovie(id: ID!): Movie
  }

  type Mutation {
    register(username: String!, password: String!): User!
    login(username: String!, password: String!): LoginResponse!
    addMovie(name: String!, duration: Int!, actors: String!, releaseDate: String, createdBy: ID!): Movie
    editMovie(id: ID!, name: String!, duration: Int!, actors: String!, releaseDate: String): Movie
    deleteMovie(id: ID!): SuccessResponse
  }

  type SuccessResponse {
    message: String
  }
`;

const typeDefs = [Auth, Movie, Common];

export default typeDefs;
