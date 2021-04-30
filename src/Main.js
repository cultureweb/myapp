import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./layouts/Login";

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default Main;
