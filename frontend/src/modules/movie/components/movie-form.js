import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieForm = ({ data = null, loading = false, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    actors: "",
    duration: "",
    releaseDate: "",
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (onSubmit) onSubmit(formValues);
    },
    [formValues, onSubmit]
  );

  const handleFieldChange = useCallback(
    (fieldname, value) => {
      setFormValues({ ...formValues, [fieldname]: value });
    },
    [formValues]
  );

  useEffect(() => {
    if (!loading && data) {
      setFormValues({
        name: data?.name,
        actors: data?.actors?.join(","),
        duration: data?.duration,
        releaseDate: data?.releaseDate,
      });
    }
  }, [data, loading]);

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formValues.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="actors" className="form-label">
          Actors
        </label>
        <input
          type="text"
          className="form-control"
          id="actors"
          aria-describedby="actors-help"
          value={formValues.actors}
          onChange={(e) => handleFieldChange("actors", e.target.value)}
          required
        />
        <div id="actors-help" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">
          Duration
        </label>
        <input
          type="number"
          className="form-control"
          id="duration"
          value={formValues.duration}
          onChange={(e) => handleFieldChange("duration", e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="release-date" className="form-label">
          Release Date
        </label>
        <input
          type="date"
          id="release-date"
          className="form-control"
          value={formValues.releaseDate}
          onChange={(e) => handleFieldChange("releaseDate", e.target.value)}
          required
        />
      </div>
      <div className="hstack justify-content-between">
        <Link to="/movies" className="btn btn-outline-secondary">
          Back to Movies
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
