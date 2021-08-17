import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import MovieCard from "../components/movie-card";
import { LIST_MOVIES } from "../queries";
import { DELETE_MOVIE_MUTATION } from "../mutations";

const MovieList = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const { loading, error, data } = useQuery(LIST_MOVIES);
  const [deleteMovie, { error: deleteError }] = useMutation(
    DELETE_MOVIE_MUTATION
  );

  const [movies, setMovies] = useState([]);

  const handleDelete = useCallback(
    (id) => {
      if (window.confirm("Are you sure you want to delete this movie?")) {
        deleteMovie({ variables: { id } });

        if (deleteError) {
          console.error(deleteError);
        }
      }
    },
    [deleteError]
  );

  useEffect(() => {
    if (!loading && !error && data?.listMovies) {
      setMovies(data.listMovies);
    }
  }, [loading]);

  return (
    <div className="container">
      <div className="row pt-4">
        <div className="hstack justify-content-between">
          <h1>Movie list</h1>
          <Link to="/movies/add" className="btn btn-outline-success">
            <i className="bi bi-plus-circle" />
            <span>Add New</span>
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        {loading ? (
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          />
        ) : (
          movies.map((movie) => (
            <div className="col-md-4 col-sm-6 col-xs-12" key={movie._id}>
              <MovieCard user={user} movie={movie} onDelete={handleDelete} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
