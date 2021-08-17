import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Login, Register, GET_CURRENT_USER } from "./modules/auth";
import { MovieList, AddMovie, EditMovie } from "./modules/movie";
import "./app.css";

const App = () => {
  const [user, setUser] = useState(null);
  const { loading, data, error } = useQuery(GET_CURRENT_USER);

  useEffect(() => {
    if (data?.currentUser) {
      setUser(data.currentUser);
      localStorage.setItem("user", JSON.stringify(data.currentUser));
    }
  }, [loading, data]);

  return (
    <div className="app">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Router>
          <Switch>
            <Redirect path="/" to="/login" exact />
            <Route path="/login" exact>
              {user ? <Redirect to="/movies" /> : <Login />}
            </Route>
            <Route path="/register" exact>
              {user ? <Redirect to="/movies" /> : <Register />}
            </Route>
            <Route path="/movies" exact>
              {user ? <MovieList /> : <Redirect to="/login" />}
            </Route>
            <Route path="/movies/add" exact>
              {user ? <AddMovie /> : <Redirect to="/login" />}
            </Route>
            <Route path="/movies/:id/edit" exact>
              {user ? <EditMovie /> : <Redirect to="/login" />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default App;
