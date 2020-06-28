import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "../components/common/Header";
import Board from "../components/Board";
import Home from "../components/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/board" component={Board} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
