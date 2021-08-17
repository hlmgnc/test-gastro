import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import MovieForm from "../components/movie-form";
import { GET_MOVIE } from "../queries";
import { EDIT_MOVIE_MUTATION } from "../mutations";

const EditMovie = () => {
  const { id } = useParams();
  const [editMovie, { error: editError }] = useMutation(EDIT_MOVIE_MUTATION);
  const { loading, error, data } = useQuery(GET_MOVIE, { variables: { id } });

  const handleEditMovie = useCallback(
    (values) => {
      const { name, duration, actors, releaseDate } = values;

      editMovie({
        variables: {
          id: id,
          name,
          duration: parseInt(duration),
          actors,
          releaseDate,
        },
      });

      if (editError) {
        console.error(editError);
      }
    },
    [id, editError]
  );

  useEffect(() => {});

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-md-6 col-sm-12">
          <h1>Edit movie</h1>
          <hr />
          {loading ? (
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            />
          ) : (
            <MovieForm
              onSubmit={handleEditMovie}
              data={data?.getMovie}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
