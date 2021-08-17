import { currentUser, register, login } from "./auth";
import {
  listMovies,
  getMovie,
  addMovie,
  editMovie,
  deleteMovie,
} from "./movie";

const resolverMap = {
  Query: {
    currentUser,
    listMovies,
    getMovie,
  },
  Mutation: {
    addMovie,
    editMovie,
    deleteMovie,
    register,
    login,
  },
};

export default resolverMap;
