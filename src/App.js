import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./Components/Root";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Root />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
