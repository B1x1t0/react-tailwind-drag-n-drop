import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "../components/common/Header";
import App from "../components/App";
import Home from "../components/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
