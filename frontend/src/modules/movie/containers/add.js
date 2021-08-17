import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import MovieForm from "../components/movie-form";
import { ADD_MOVIE_MUTATION } from "../mutations";

const AddMovie = () => {
  const history = useHistory();
  const [addMovie, { error }] = useMutation(ADD_MOVIE_MUTATION);

  const handleAddMovie = useCallback(
    (values) => {
      const { name, duration, actors, releaseDate } = values;

      let user = localStorage.getItem("user");

      if (!user) throw new Error("User not found");

      user = JSON.parse(user);

      addMovie({
        variables: {
          name,
          duration: parseInt(duration),
          actors,
          releaseDate,
          createdBy: user.id,
        },
      }).then(() => history.push("/movies"));

      if (error) {
        console.error(error);
      }
    },
    [addMovie, error]
  );

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-md-6 col-sm-12">
          <h1>Add movie</h1>
          <hr />
          <MovieForm onSubmit={handleAddMovie} />
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
