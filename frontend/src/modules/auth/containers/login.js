import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import AuthForm from "../components/auth-form";
import { LOGIN_MUTATION } from "../mutations";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Login = () => {
  const [login, { error }] = useMutation(LOGIN_MUTATION);
  let query = useQuery();

  const handleLogin = useCallback((values) => {
    const { username, password } = values;

    login({
      variables: {
        username,
        password,
      },
    }).then(({ data }) => {
      const token = data?.login?.token;

      if (token) localStorage.setItem("token", token);

      window.location.reload();
    });
  }, []);

  return (
    <div className="container">
      <div className="row auth-row">
        <div className="col-md-6 col-sm-12">
          <h2>Gastromatic - Log in</h2>
          <hr />
          {query.get("registerSuccess") === "1" && (
            <div className="alert alert-success" role="alert">
              You have successfully registered. <br />
              Use your credentials to login!
            </div>
          )}
          <AuthForm onSubmit={handleLogin} buttonText="Log in" />
          <p>
            Don't have an account? Register from{" "}
            <Link to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
