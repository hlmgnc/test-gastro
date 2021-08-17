import { Link } from "react-router-dom";
import dayjs from "dayjs";

const MovieCard = ({ user, movie, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <hr />

        <p>{movie.actors.join(", ")}</p>

        <hr />

        <div className="hstack gap-1 mb-3">
          {Array.from({ length: Math.round(movie.averageRating) }, (_, i) => (
            <i
              key={`filled-star-${i}`}
              className="bi-star-fill"
              style={{ color: "orange" }}
            />
          ))}
          {Array.from(
            { length: 5 - Math.round(movie.averageRating) },
            (_, i) => (
              <i
                key={`empty-star-${i}`}
                className="bi-star"
                style={{ color: "orange" }}
              />
            )
          )}
          <span>({movie.ratings.length})</span>
        </div>

        <p className="mb-3">
          Release Date: <br />{" "}
          {dayjs(parseInt(movie.releaseDate)).format("MMM DD, YYYY")}
        </p>

        {user.id === movie.createdBy && (
          <div className="hstack gap-2">
            <Link
              to={`/movies/${movie._id}/edit`}
              className="btn btn-outline-primary btn-sm"
            >
              <i className="bi-pencil-fill" />
            </Link>
            <button
              onClick={() => onDelete(movie._id)}
              className="btn btn-outline-danger btn-sm"
            >
              <i className="bi-trash-fill" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
