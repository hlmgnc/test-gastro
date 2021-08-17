import { useState, useCallback } from "react";

const AuthForm = ({ onSubmit, buttonText = "Submit" }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (onSubmit) onSubmit(formValues);
    },
    [formValues, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-floating mb-3">
        <input
          className="form-control"
          id="username"
          placeholder="Username"
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
          value={formValues.username}
        />
        <label htmlFor="username">Username</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          value={formValues.password}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="d-md-block">
        <button className="btn btn-primary float-end" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
