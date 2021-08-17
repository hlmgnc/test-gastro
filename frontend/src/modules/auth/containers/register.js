import { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import AuthForm from "../components/auth-form";
import { REGISTER_MUTATION } from "../mutations";

const Register = () => {
  const history = useHistory();
  const [register, { error }] = useMutation(REGISTER_MUTATION);

  const handleRegister = useCallback((values) => {
    const { username, password } = values;

    register({
      variables: {
        username,
        password,
      },
    }).then(({ data }) => {
      console.log(data);

      if (!error) {
        history.push("/login?registerSuccess=1");
      }
    });

    if (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="container">
      <div className="row auth-row">
        <div className="col-md-6 col-sm-12">
          <h2>Gastromatic - Register</h2>
          <hr />
          <AuthForm onSubmit={handleRegister} buttonText="Register" />
          <p>
            Already have an account? Login from <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
